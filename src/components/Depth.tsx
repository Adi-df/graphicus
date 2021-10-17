import { Box, Flex, Text } from "@chakra-ui/react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import React, { FC, useState } from "react";

export const Depth: FC = () => {
  const [depth, setDepth] = useState(4);

  return (
    <Box
      w="100%"
      p="5%"
      color="white"
      border="2px"
      borderColor="white"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Depth :</Text>
      <Flex>
        <Slider
          min={1}
          max={10}
          defaultValue={depth}
          onChange={(e) => setDepth(e)}
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
          {depth}
        </Text>
      </Flex>
    </Box>
  );
};
