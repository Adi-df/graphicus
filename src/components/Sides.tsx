import { Box, Flex, Text } from "@chakra-ui/react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import React, { FC } from "react";
import { useStore } from "../store";

export const Sides: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [sides, setSides] = useStore((state) => [state.sides, state.setSides]);

  return (
    <Box
      {...props}
      padding="5%"
      color="white"
      border="white 2px solid"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Sides :</Text>
      <Flex>
        <Slider
          min={3}
          max={10}
          defaultValue={sides}
          onChange={(e) => setSides((_) => e)}
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
          width="30px"
          height="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="black"
        >
          {sides}
        </Text>
      </Flex>
    </Box>
  );
};
