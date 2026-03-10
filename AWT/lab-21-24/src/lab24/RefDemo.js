import React, { useRef } from "react";

function RefDemo(){

  const inputRef = useRef();

  function focusInput(){
    inputRef.current.focus();
  }

  return(
    <div>
      <h2>useRef Demo</h2>

      <input ref={inputRef} placeholder="Enter text"/>

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default RefDemo;