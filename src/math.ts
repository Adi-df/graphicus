export type Point = [number, number];
export type Segment = [Point, Point];
export type Polygon = Point[];

export const length = ([a, b]: Segment) =>
  Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);

export const slide = ([a, b]: Segment, s: number) => [
  a[0] + (s / length([a, b])) * (b[0] - a[0]),
  a[1] + (s / length([a, b])) * (b[1] - a[1]),
];

export const lerp = ([a, b]: Segment, t: number) =>
  slide([a, b], length([a, b]) * t);
