import React, { FC, useEffect, useState } from "react";
import { Box, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { useStore } from "../store";
import { Node } from "@nteract/mathjax";

export type FunctionDef = (x: number) => number;
export type FunctionBuilder = (m: string) => FunctionDef;

export const Function: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [funcString, setFuncString] = useState("x");
  const [func, setFunc] = useStore((state) => [state.func, state.setFunc]);

  const buildFunction: FunctionBuilder = (m: string) => (x: number) => x;

  useEffect(() => {
    setFunc((_) => buildFunction(funcString));
  }, [funcString, setFunc]);

  return (
    <Box
      {...props}
      padding="5%"
      color="white"
      border="2px"
      borderColor="white"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Function :</Text>
      <Box>
        <InputGroup>
          <InputLeftAddon
            backgroundColor="white"
            color="black"
            children={"f(x) = "}
          />
          <Input
            focusBorderColor="white"
            value={funcString}
            onChange={(m) => setFuncString(m.target.value)}
          />
        </InputGroup>
      </Box>
      <Box>
        <Node>{funcString}</Node>
      </Box>
    </Box>
  );
};
