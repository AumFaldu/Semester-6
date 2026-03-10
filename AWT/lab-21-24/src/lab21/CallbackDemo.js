import React, { useState, useCallback } from "react";

function CallbackDemo() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Demo</h2>
      <button onClick={handleClick}>Click</button>
      <br/><br/>
      <button onClick={() => setCount(count+1)}>Increase {count}</button>
    </div>
  );
}

export default CallbackDemo;