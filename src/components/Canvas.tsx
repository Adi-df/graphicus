import React, { FC, useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { useStore } from "../store";
import { Point, Polygon } from "../math";

export const Canvas: FC = () => {
  const { func, depth, frame } = useStore();
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

    let rootTriangle: Polygon = Array.from(Array(3))
      .map((_, i) => (TAU / 3) * i)
      .map((a) => [
        CENTER[0] + Math.cos(a) * RADIUS,
        CENTER[1] + Math.sin(a) * RADIUS,
      ]);

    drawPoly(rootTriangle);
  }, [frame, context]);

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
