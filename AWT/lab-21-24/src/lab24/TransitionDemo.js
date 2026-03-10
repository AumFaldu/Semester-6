import React, { useState, useTransition } from "react";

function TransitionDemo(){

  const [list,setList] = useState([]);
  const [isPending,startTransition] = useTransition();

  function handleClick(){

    startTransition(()=>{

      const arr=[];
      for(let i=0;i<5000;i++){
        arr.push(i);
      }

      setList(arr);
    });
  }

  return(
    <div>
      <h2>useTransition Demo</h2>

      <button onClick={handleClick}>
        Generate List
      </button>

      {isPending && <p>Loading...</p>}

      <ul>
        {list.map(i=>(
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransitionDemo;