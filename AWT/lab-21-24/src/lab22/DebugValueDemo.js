import React, { useState, useDebugValue } from "react";

function useCustomCounter() {

  const [count, setCount] = useState(0);

  useDebugValue(count > 5 ? "High" : "Low");

  return [count, setCount];
}

function DebugValueDemo() {

  const [count, setCount] = useCustomCounter();

  return (
    <div>
      <h2>useDebugValue Demo</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  );
}

export default DebugValueDemo;