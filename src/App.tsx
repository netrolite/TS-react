import { useRef, ChangeEvent, useEffect, FormEvent } from "react";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="app">
      <Counter>
        {
          (data) => (
            <>
              <div>Count: {data.count}</div>
              <button onClick={() => data.setCount(prevState => prevState + 1)}>Increment count</button>
            </>
          )
        }
      </Counter>
    </div>
  )
}