import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../util/networkCalls";

function ForgotPasswordBox() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function forgotPasswordHandler() {
    const { success } = await forgotPassword(email);
    if (success) navigate("/user/verifyCode", { replace: "true" });
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="email">
          <b>Enter registered email</b>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit" onClick={forgotPasswordHandler}>
          Send Code
        </button>
      </div>

      <div>
        Remember Password ?<Link to="/user/login">Log In</Link>
      </div>
    </div>
  );
}

export default ForgotPasswordBox;
