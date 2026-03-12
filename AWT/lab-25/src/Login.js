import React from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("test@example.com")}>Login</button>
      )}
    </div>
  );
}

export default Login;