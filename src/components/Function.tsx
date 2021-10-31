import React, { FC, useRef, useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { parser as mathParser } from "mathjs";
import { render as renderFormulae } from "katex";
import "../../node_modules/katex/dist/katex.min.css";
import { useStore } from "../store";

export type FunctionDef = (x: number) => number;
export type FunctionBuilder = (m: string) => FunctionDef;

export const Function: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const formulaeRef = useRef<null | HTMLElement>(null);
  const [funcString, setFuncString] = useState("x");
  const setFunc = useStore((state) => state.setFunc);

  const buildFunction: FunctionBuilder = (m: string) => {
    const parser = mathParser();
    parser.evaluate(`f(x) = ${m}`);
    return parser.get("f");
  };

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
          <InputRightAddon
            backgroundColor="white"
            padding="0"
            children={
              <Button
                color="black"
                backgroundColor="white"
                _hover={{ bg: "white" }}
                onClick={() => {
                  setFunc((_) => buildFunction(funcString));
                  if (formulaeRef.current)
                    renderFormulae(funcString, formulaeRef.current);
                }}
              >
                Update
              </Button>
            }
          />
        </InputGroup>
      </Box>
      <Box marginTop="2" textAlign="center">
        <span ref={formulaeRef} />
      </Box>
    </Box>
  );
};
