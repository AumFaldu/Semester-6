import React, { useState, useLayoutEffect } from "react";

function LayoutEffectDemo(){

  const [color,setColor] = useState("red");

  useLayoutEffect(()=>{
    console.log("Layout Effect Executed");
  });

  return(
    <div>
      <h2>useLayoutEffect Demo</h2>

      <div style={{
        width:"200px",
        height:"200px",
        background:color
      }}></div>

      <button onClick={()=>setColor("blue")}>
        Change Color
      </button>
    </div>
  );
}

export default LayoutEffectDemo;