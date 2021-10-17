import { Box, Switch, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useStore } from "../store";

export const Rotating: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const setRotating = useStore((state) => state.setRotating);

  return (
    <Box
      {...props}
      padding="5%"
      color="white"
      border="white 2px solid"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Rotating :</Text>
      <Switch onChange={() => setRotating((v) => !v.rotating)} />
    </Box>
  );
};
