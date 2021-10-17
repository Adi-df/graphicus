import React from "react";
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import { Function } from "./components/Function";
import { Depth } from "./components/Depth";
import { Canvas } from "./components/Canvas";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <Flex w="100%" p="5%" bg="black" wrap="wrap">
      <Spacer />
      <Center w="45%">
        <Function width="50%" />
        <Box marginLeft="20px" width="50%">
          <Depth />
          <Timeline margin="20px 0 0 0" />
        </Box>
      </Center>
      <Spacer />
      <Center w="45%">
        <Canvas />
      </Center>
      <Spacer />
    </Flex>
  );
}

export default App;
