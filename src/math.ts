export type Point = [number, number];
export type Segment = [Point, Point];
export type Polygon = Point[];

export const length = ([a, b]: Segment) =>
  Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);
