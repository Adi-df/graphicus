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

export const Timeline: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [time, setTime] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animatingInterval, setAnimatingInterval] = useState<null | number>(
    null
  );

  useEffect(() => {
    if (animating && !animatingInterval) {
      setAnimatingInterval(
        setInterval(
          () => setTime((t) => (t + 1) % 240),
          1000 / 20
        ) as unknown as number
      );
    } else if (!animating) {
      clearInterval(animatingInterval || undefined);
      setAnimatingInterval(null);
    }
  }, [animating, animatingInterval]);

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
        <Slider min={0} max={240} value={time} onChange={(e) => setTime(e)}>
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
          {time}
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
