import React, { useActionState } from "react";

async function submitAction(prevState, formData) {
  const name = formData.get("name");

  if (!name) {
    return { error: "Name is required" };
  }

  return { success: "Form submitted successfully!" };
}

function ActionStateForm() {
  const [state, formAction] = useActionState(submitAction, {});

  return (
    <div>
      <h2>useActionState Form Validation</h2>

      <form action={formAction}>
        <input name="name" placeholder="Enter Name" />
        <button type="submit">Submit</button>
      </form>

      {state?.error && <p style={{color:"red"}}>{state.error}</p>}
      {state?.success && <p style={{color:"green"}}>{state.success}</p>}
    </div>
  );
}

export default ActionStateForm;