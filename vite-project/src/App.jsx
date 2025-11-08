import  { useReducer, useState } from "react";
import CompA from "./components/CompA";
import CountContext from "./components/context/CountContext";
import CountProvider from "./components/context/CountProvider";
export default function App() {
   return (
    <div>
     <CountProvider>
          <CompA/>
     </CountProvider>
    </div>
  );
}
