import { ChangeEvent, FormEvent, useRef } from "react";

interface IProps {
  title: string,
  handleChange: (e: ChangeEvent) => void;
}

export const Card: React.FC<IProps> = ({ title, handleChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="app">
      <canvas ref={canvasRef}></canvas>
      <div ref={divRef}></div>
      <input ref={inputRef} onChange={handleChange} />
      <p ref={paragraphRef}></p>
    </div>
  )
}