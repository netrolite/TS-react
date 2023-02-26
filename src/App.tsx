import { useEffect, useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0);
  const [keysPressed, setKeysPressed] = useState([] as string[]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    }
  }, [])
  useEffect(() => scrollIfKeysPressedIsOffscreen());

  
  function incrementCount() {
    setCounter(prevState => prevState + 1);
  }
  function decrementCount() {
    setCounter(prevState => prevState - 1);
  }
  
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "+") incrementCount();
    else if (e.key === "-") decrementCount();
    setKeysPressed(prevState => [...prevState, e.key])
  }
  
  const keysPressedNode = keysPressed.map((key, i) => (
    <li key={i}>{key}</li>
  ))
    
    return (
      <div id="app">
      <h1>hello world</h1>
      <div className="counter">{counter}</div>
      <button onClick={ incrementCount }>+</button>
      <button onClick={ decrementCount }>-</button>
      <div className="keys-pressed">
        <ol>{keysPressedNode}</ol>
      </div>
    </div>
  )
}

function scrollIfKeysPressedIsOffscreen() {
  const appNode = document.querySelector("#app") as HTMLDivElement;
  const appHeight = appNode.offsetHeight;
  if (appHeight > window.innerHeight) {
    window.scrollTo(0, appHeight)
  }
}