import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { logout, userDashboard } from "../util/networkCalls";
import LoginBox from "../components/loginBox";
import SignupBox from "../components/signupBox";
import ForgotPasswordBox from "../components/forgotPasswordBox";
import VerifyCodeBox from "../components/verifyCode";
import PasswordResetBox from "../components/passwordResetBox";
function User() {
  const [user, setUser] = useState();
  const { authDispatch } = useAuth();
  const { action } = useParams();
  const navigate = useNavigate();

  async function userHandler() {
    const res = await userDashboard();
    setUser(res.data.user.name);
  }

  async function logoutHandler() {
    await logout();
    authDispatch({ type: "END_SESSION" });
    navigate("/", { replace: "true" });
  }

  if (action === "login")
    return (
      <div>
        <LoginBox />
      </div>
    );

  if (action === "signup")
    return (
      <div>
        <SignupBox />
      </div>
    );

  if (action === "forgotPassword")
    return (
      <div>
        <ForgotPasswordBox />
      </div>
    );

  if (action === "verifyCode")
    return (
      <div>
        <VerifyCodeBox />
      </div>
    );

  if (action === "passwordReset")
    return (
      <div>
        <PasswordResetBox />
      </div>
    );

  return (
    <div>
      <button onClick={userHandler}>user Info</button>
      <button onClick={logoutHandler}>Logout</button>
      <div>{user}</div>
    </div>
  );
}

export default User;
