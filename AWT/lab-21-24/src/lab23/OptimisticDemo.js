import React, { useOptimistic } from "react";

function OptimisticDemo(){

  const [messages, addMessage] = useOptimistic(
    [],
    (state,newMsg)=>[...state,newMsg]
  );

  return(
    <div>
      <h2>useOptimistic Demo</h2>

      <button onClick={()=>addMessage("New Message")}>
        Add Message
      </button>

      <ul>
        {messages.map((m,i)=>
          <li key={i}>{m}</li>
        )}
      </ul>
    </div>
  );
}

export default OptimisticDemo;