import React from "react";
import { Center, Flex, Spacer } from "@chakra-ui/react";
import { Function } from "./components/Function";

function App() {
  return (
    <Flex w="100%" p="5%" bg="black">
      <Spacer />
      <Center w="40%">
        <Function />
      </Center>
      <Spacer />
      <Center w="40%"></Center>
      <Spacer />
    </Flex>
  );
}

export default App;
