import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton(){

  const { pending } = useFormStatus();

  return(
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function FormStatusDemo(){

  async function submitAction(){
    await new Promise(res=>setTimeout(res,2000));
  }

  return(
    <div>
      <h2>useFormStatus Demo</h2>

      <form action={submitAction}>
        <input placeholder="Enter text"/>
        <SubmitButton/>
      </form>
    </div>
  );
}

export default FormStatusDemo;