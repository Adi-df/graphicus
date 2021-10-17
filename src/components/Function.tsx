import React, { FC, useState } from "react";
import { Box, Container, Select } from "@chakra-ui/react";

export type FunctionType = "afine" | "inverse" | "power";

export const Function: FC = () => {
  const [functionType, setFunctionType] = useState<FunctionType>("afine");

  return (
    <Box
      w="100%"
      p="5%"
      color="white"
      border="2px"
      borderColor="white"
      borderRadius="2xl"
    >
      <Container fontSize="2xl">Function :</Container>
      <Select
        bg="white"
        color="black"
        onChange={(e) => setFunctionType(e.target.value as FunctionType)}
      >
        <option value="afine">Afine : f(x) = ax + b</option>
        <option value="inverse">Inverse : f(x) = a(1/x) + b</option>
        <option value="power">Power : f(x) = a(x**c) + b</option>
      </Select>
      <Box></Box>
    </Box>
  );
};
