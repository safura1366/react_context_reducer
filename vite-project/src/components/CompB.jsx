import React from "react";
import { useContext } from "react";
import CountContext from "./context/CountContext";

export default function CompB() {
  const {count,dispatch}= useContext(CountContext)

  return (
    <div>
  
      <h1>from is compB</h1>
      {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}
