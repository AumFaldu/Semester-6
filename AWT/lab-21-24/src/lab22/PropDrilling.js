import React from "react";

function C({message}) {
  return <h3>Message from A: {message}</h3>;
}

function B({message}) {
  return <C message={message}/>;
}

function A() {
  const message = "Hello from Component A";

  return (
    <div>
      <h2>Prop Drilling Example</h2>
      <B message={message}/>
    </div>
  );
}

export default A;