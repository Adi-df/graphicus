import { Box } from "@chakra-ui/layout";
import {
  Text,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Button,
} from "@chakra-ui/react";
import { FiPlay, FiStopCircle } from "react-icons/fi";
import React, { FC, useEffect, useState } from "react";
import { useStore } from "../store";

export const Timeline: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [frame, maxFrame, nextFrame, setFrame] = useStore((state) => [
    state.frame,
    state.maxFrame,
    state.nextFrame,
    state.setFrame,
  ]);
  const [animating, setAnimating] = useState(false);
  const [animatingInterval, setAnimatingInterval] = useState<null | number>(
    null
  );

  useEffect(() => {
    if (animating && !animatingInterval) {
      setAnimatingInterval(
        setInterval(() => nextFrame(), 1000 / 20) as unknown as number
      );
    } else if (!animating) {
      clearInterval(animatingInterval || undefined);
      setAnimatingInterval(null);
    }
  }, [animating, animatingInterval, nextFrame]);

  return (
    <Box
      {...props}
      padding="5%"
      color="white"
      border="white 2px solid"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Timeline :</Text>
      <Flex>
        <Slider
          min={1}
          max={maxFrame}
          value={frame}
          onChange={(e) => setFrame((_) => e)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text
          marginLeft="15px"
          borderRadius="full"
          bg="white"
          width="40px"
          height="35px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="black"
        >
          {frame}
        </Text>
      </Flex>
      <Flex>
        <Button
          size="md"
          color="black"
          bg="white"
          onClick={() => setAnimating((a) => !a)}
        >
          {animating ? <FiStopCircle /> : <FiPlay />}
          <Text marginLeft="5px">Animate</Text>
        </Button>
      </Flex>
    </Box>
  );
};
