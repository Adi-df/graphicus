import React from "react";
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import { Function } from "./components/Function";
import { Depth } from "./components/Depth";
import { Canvas } from "./components/Canvas";

function App() {
  return (
    <Flex w="100%" p="5%" bg="black" wrap="wrap">
      <Spacer />
      <Center w="40%">
        <Function />
        <Box w="20px" />
        <Depth />
      </Center>
      <Spacer />
      <Center w="40%">
        <Canvas />
      </Center>
      <Spacer />
    </Flex>
  );
}

export default App;
