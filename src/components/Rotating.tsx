import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const Rotating: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [rotating, setRotating] = useState(0);

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
          onChange={(e) => setRotating(e)}
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
