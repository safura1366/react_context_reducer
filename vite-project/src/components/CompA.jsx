import React, { useContext } from "react";
import CompB from "./CompB";

import CountContext from "./context/CountContext";
export default function CompA() {
   const {count}= useContext(CountContext)
  return (
    <div>
      <h1>From componnet is A </h1>
      <h2>{count}</h2>
      <CompB />
    </div>
  );
}
