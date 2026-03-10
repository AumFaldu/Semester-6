import React, { useState, useDeferredValue } from "react";

function DeferredValueDemo(){

  const [text,setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <h2>useDeferredValue Demo</h2>

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Current: {text}</p>
      <p>Deferred: {deferredText}</p>
    </div>
  );
}

export default DeferredValueDemo;