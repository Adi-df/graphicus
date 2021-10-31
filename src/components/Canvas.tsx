import React, { FC, useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { useStore } from "../store";
import { lerp, Point, Polygon } from "../math";

export const Canvas: FC = () => {
  const { func, depth, rotating, sides, frame, maxFrame } = useStore();
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(
    () =>
      setContext(canvasRef.current ? canvasRef.current.getContext("2d") : null),
    [canvasRef]
  );

  // Each frame
  useEffect(() => {
    if (!canvasRef.current || !context) return;
    context.fillStyle = "black";
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const TAU = Math.PI * 2;
    const CENTER: Point = [
      canvasRef.current.width / 2,
      canvasRef.current.height / 2,
    ];
    const RADIUS =
      (1 / 3) * Math.min(canvasRef.current.width, canvasRef.current.height);

    const drawPoly = (poly: Polygon) => {
      context.beginPath();
      context.moveTo(poly[0][0], poly[0][1]);
      poly.forEach((p) => context.lineTo(p[0], p[1]));
      context.closePath();
      context.stroke();
    };

    context.strokeStyle = "white";
    context.lineWidth = 2;

    // Circle
    context.beginPath();
    context.arc(CENTER[0], CENTER[1], RADIUS, 0, TAU);
    context.stroke();

    let rootPoly: Polygon = Array.from(Array(sides))
      .map((_, i) => (TAU / sides) * i)
      .map((v) => v + (TAU / maxFrame) * (frame * rotating))
      .map((a) => [
        CENTER[0] + Math.cos(a) * RADIUS,
        CENTER[1] + Math.sin(a) * RADIUS,
      ]);

    drawPoly(rootPoly);

    const recursive = (
      depth: number,
      root: Polygon,
      frame: number,
      func: (f: number) => number
    ) => {
      const childPoly = root.map((p, i, a) =>
        lerp([p, a[(i + 1) % a.length]], Math.abs(frame % 1))
      ) as Polygon;
      drawPoly(childPoly);
      if (depth > 0) recursive(depth - 1, childPoly, func(frame), func);
    };

    recursive(depth - 1, rootPoly, func(frame / maxFrame), func);
  }, [frame, context, depth, rotating, func, maxFrame, sides]);

  return (
    <Box border="white 2px solid" borderRadius="2xl" width="100%" height="100%">
      <canvas
        style={{ width: "100%", height: "100%" }}
        width={400}
        height={400}
        ref={canvasRef}
      />
    </Box>
  );
};
