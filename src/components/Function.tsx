import React, { FC, useState } from "react";
import { Box, Container, Select } from "@chakra-ui/react";
import { Provider, Node } from "@nteract/mathjax";

export type FunctionDef =
  | { type: "afine"; coef: number; dec: number }
  | { type: "power"; coef: number; dec: number; power: number }
  | { type: "inverse"; coef: number; dec: number; power: number };

export const Function: FC = () => {
  const [func, setFunc] = useState<FunctionDef>({
    type: "afine",
    coef: 1,
    dec: 0,
  });

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
        onChange={({ target: { value } }) =>
          setFunc(
            value === "power"
              ? { type: "power", coef: 1, dec: 0, power: 2 }
              : value === "inverse"
              ? { type: "inverse", coef: 1, dec: 0, power: 1 }
              : { type: "afine", coef: 1, dec: 0 }
          )
        }
      >
        <option value="afine">Afine : f(x) = ax + b</option>
        <option value="power">Power : f(x) = a(x**c) + b</option>
        <option value="inverse">Inverse : f(x) = a(1/x**c) + b</option>
      </Select>
      <Box>
        <Provider>
          <Node>
            {func.type === "afine"
              ? `f(x) = ${func.coef}x + ${func.dec}`
              : func.type === "power"
              ? `f(x) = ${func.coef}x^${func.power} + ${func.dec}`
              : func.type === "inverse"
              ? `f(x) = ${func.coef}{1 \\over x^${func.power}} + ${func.dec}`
              : ""}
          </Node>
        </Provider>
      </Box>
    </Box>
  );
};
