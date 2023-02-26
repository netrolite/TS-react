import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter(prevState => prevState + 1);
  }
  function decrementCount() {
    setCounter(prevState => prevState - 1);
  }
  console.log(import.meta.env.MY_VARIABLE);
  return (
    <>
      <h1>hello world</h1>
      <div className="counter">{counter}</div>
      <button onClick={ incrementCount }>+</button>
      <button onClick={ decrementCount }>-</button>
    </>
  )
}