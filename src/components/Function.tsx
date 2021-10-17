import React, { FC } from "react";
import {
  Box,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { Provider, Node } from "@nteract/mathjax";
import { useStore } from "../store";

export type FunctionDef =
  | { type: "afine"; coef: number; dec: number }
  | { type: "power"; coef: number; dec: number; power: number }
  | { type: "inverse"; coef: number; dec: number; power: number };

export const InputNumber: FC<{
  name: string;
  defaultValue: number;
  onChange: (value: number) => any;
}> = ({ name, defaultValue, onChange }) => (
  <Box>
    <Text fontSize="2xl">{name}</Text>
    <NumberInput
      defaultValue={defaultValue}
      onChange={(e) => onChange(parseInt(e))}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Box>
);

export const Function: FC<{
  height?: string;
  width?: string;
  margin?: string;
}> = (props) => {
  const [func, setFunc] = useStore((state) => [state.func, state.setFunc]);

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
        <Select
          bg="white"
          color="black"
          marginBottom="10px"
          onChange={({ target: { value } }) =>
            setFunc((_) =>
              value === "power"
                ? { type: "power", coef: 1, dec: 0, power: 1 }
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
        <InputNumber
          name="Coefficient"
          defaultValue={1}
          onChange={(e) => setFunc((f) => ({ ...f.func, coef: e }))}
        />
        <InputNumber
          name="Decalage"
          defaultValue={0}
          onChange={(e) => setFunc((f) => ({ ...f.func, dec: e }))}
        />
        {func.type === "inverse" || func.type === "power" ? (
          <InputNumber
            name="Power"
            defaultValue={1}
            onChange={(e) => setFunc((f) => ({ ...f.func, power: e }))}
          />
        ) : null}
      </Box>
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
