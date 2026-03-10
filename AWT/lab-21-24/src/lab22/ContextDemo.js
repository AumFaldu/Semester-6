import React, { createContext, useContext } from "react";

const MessageContext = createContext();

function C(){
  const message = useContext(MessageContext);
  return <h3>{message}</h3>;
}

function B(){
  return <C />;
}

function ContextDemo(){

  return (
    <MessageContext.Provider value="Hello from useContext">
      <h2>useContext Demo</h2>
      <B/>
    </MessageContext.Provider>
  );
}

export default ContextDemo;