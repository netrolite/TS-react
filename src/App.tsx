import { useRef, ChangeEvent, useEffect, FormEvent } from "react";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="app">
      <Counter>
        {
          (count, setCount) => (
            <>
              <div>Count: {count}</div>
              <button onClick={() => setCount(prevState => prevState + 1)}>Increment count</button>
            </>
          )
        }
      </Counter>
    </div>
  )
}