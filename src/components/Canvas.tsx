import { Box } from "@chakra-ui/layout";
import React, { FC, useRef, useEffect, useState } from "react";

export const Canvas: FC = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(
    () =>
      setContext(canvasRef.current ? canvasRef.current.getContext("2d") : null),
    [canvasRef]
  );

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
