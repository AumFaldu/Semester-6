import React, { useRef, useImperativeHandle, forwardRef } from "react";

const Child = forwardRef((props,ref)=>{

  useImperativeHandle(ref, ()=>({
    showAlert(){
      alert("Hello from Child");
    }
  }));

  return <h3>Child Component</h3>;
});

function ImperativeHandleDemo(){

  const ref = useRef();

  return(
    <div>
      <h2>useImperativeHandle Demo</h2>
      <Child ref={ref}/>
      <button onClick={()=>ref.current.showAlert()}>
        Call Child Function
      </button>
    </div>
  );
}

export default ImperativeHandleDemo;