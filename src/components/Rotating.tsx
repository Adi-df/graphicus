import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useStore } from "../store";

export const Rotating: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [rotating, setRotating] = useStore((state) => [
    state.rotating,
    state.setRotating,
  ]);

  return (
    <Box
      {...props}
      padding="5%"
      color="white"
      border="white 2px solid"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Rotating speed :</Text>
      <Flex>
        <Slider
          min={0}
          max={10}
          value={rotating}
          onChange={(e) => setRotating((_) => e)}
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
          {rotating}
        </Text>
      </Flex>
    </Box>
  );
};
