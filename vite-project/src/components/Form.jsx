import React, { useState } from "react";

export default function Form() {
  const [items, setItems] = useState(["ali", "hasan", "hasan"]);
  const [name, setName] = useState("");
  const handleclick = () => {
    setItems([...items, name]);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleclick}>add name</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
