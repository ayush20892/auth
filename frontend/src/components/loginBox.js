import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { login } from "../util/networkCalls";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from.pathname || "/";
  const { authDispatch } = useAuth();

  async function loginHandler() {
    const { success, user } = await login(email, password);
    if (success) authDispatch({ type: "CREATE_SESSION", payload: user });
    navigate(previousPath, { replace: "true" });
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="email">
          <b>Username</b>
        </label>
        <input
          type="email"
          placeholder="Enter Username"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <Link to="/user/forgotPassword">Forgot Password ?</Link>
      </div>

      <div>
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
      </div>

      <div>
        <Link to="/user/signup">SIGN UP</Link>
      </div>
    </div>
  );
}

export default LoginBox;
