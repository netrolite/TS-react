import { useRef, ChangeEvent, useEffect, FormEvent } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function handleCardChange(e: ChangeEvent) {
    e.preventDefault();
  }
  
  return (
    <>
      <Card handleChange={handleCardChange} title="my title" />
      <canvas ref={canvasRef}></canvas>
    </>
  )
}