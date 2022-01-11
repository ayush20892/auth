import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { passwordReset } from "../util/networkCalls";

function PasswordResetBox() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  async function passwordResetHandler() {
    const { success, user } = await passwordReset(password, confirmPassword);
    if (success) authDispatch({ type: "CREATE_SESSION", payload: user });
    navigate("/user", { replace: "true" });
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confpassword">
          <b>Confrim Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Confirm Password"
          name="confpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit" onClick={passwordResetHandler}>
          Update Passowrd
        </button>
      </div>
    </div>
  );
}

export default PasswordResetBox;
