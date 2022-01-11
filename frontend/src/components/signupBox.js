import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { signup } from "../util/networkCalls";

function SignupBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from.pathname || "/";
  const { authDispatch } = useAuth();

  async function signupHandler() {
    const { success, user } = await signup(name, email, password);
    if (success) authDispatch({ type: "CREATE_SESSION", payload: user });
    navigate(previousPath, { replace: "true" });
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="name"
          placeholder="Enter Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
        <button type="submit" onClick={signupHandler}>
          Signup
        </button>
      </div>

      <div>
        Already user ?<Link to="/user/login">Log In</Link>
      </div>
    </div>
  );
}

export default SignupBox;
