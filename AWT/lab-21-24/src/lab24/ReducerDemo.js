import React, { useReducer } from "react";

function reducer(state,action){

  switch(action.type){
    case "inc":
      return {count: state.count+1};
    case "dec":
      return {count: state.count-1};
    default:
      return state;
  }
}

function ReducerDemo(){

  const [state,dispatch] = useReducer(reducer,{count:0});

  return(
    <div>
      <h2>useReducer Demo</h2>

      <h3>{state.count}</h3>

      <button onClick={()=>dispatch({type:"inc"})}>
        Increase
      </button>

      <button onClick={()=>dispatch({type:"dec"})}>
        Decrease
      </button>
    </div>
  );
}

export default ReducerDemo;