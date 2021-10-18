import create from "zustand";
import { FunctionDef } from "./components/Function";

export type Store = {
  func: FunctionDef;
  depth: number;
  rotating: number;
  frame: number;
  maxFrame: number;

  setFunc: (f: (s: Store) => FunctionDef) => void;
  setDepth: (d: (s: Store) => number) => void;
  setRotating: (b: (s: Store) => number) => void;
  setFrame: (f: (s: Store) => number) => void;

  nextFrame: () => void;
};

export const useStore = create<Store>((set) => ({
  func: { type: "afine", coef: 1, dec: 0 },
  depth: 1,
  rotating: 0,
  frame: 0,
  maxFrame: 600,

  setFunc: (f: (s: Store) => FunctionDef) =>
    set((state) => ({
      func: f(state),
    })),
  setDepth: (d: (s: Store) => number) =>
    set((state) => ({
      depth: d(state),
    })),
  setRotating: (b: (s: Store) => number) =>
    set((state) => ({ rotating: b(state) })),
  setFrame: (f: (s: Store) => number) => set((state) => ({ frame: f(state) })),

  nextFrame: () =>
    set((state) => ({ frame: (state.frame + 1) % state.maxFrame })),
}));
