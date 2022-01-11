import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../util/networkCalls";

function VerifyCodeBox() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  async function verifyCodeHandler() {
    const { success } = await verifyCode(code);
    if (success) navigate("/user/passwordReset", { replace: "true" });
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="name">
          <b>Code</b>
        </label>
        <input
          type="name"
          placeholder="Enter Name"
          name="name"
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit" onClick={verifyCodeHandler}>
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifyCodeBox;
