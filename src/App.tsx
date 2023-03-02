import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [state, setState] = useState<number>(0);

  const titles = ["hello", "my title", "epic title", "the title"];

  const cardsNodes = titles.map((title, i) => (
    <Card
      obj={{ firstName: "matvey", phoneNumber: Math.random() * 1000000 }}
      title={title}
      key={i}
    />
  ));

  function updateState() {
    setState(Math.random());
  }

  return (
    <div className="app">
      <div className="cards">
        {cardsNodes}
      </div>
      <button onClick={updateState}>
        Update state
      </button>
    </div>
  )
}