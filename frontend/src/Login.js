import React, { useState } from "react";
import { loginUser } from "./api";

function Login({ setStep, setEmail }) {

  const [email, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({
        email,
        password
      });

      alert(res.data.message);

      setEmail(email);
      setStep(2);

    } catch (err) {
      console.error(err);
      alert("Backend connection failed");
    }
  };

    return (
  <div className="container">

  <h2>Welcome Back</h2>

  <form onSubmit={submit}>

  <div className="inputBox">
  <input required onChange={(e)=>setEmailInput(e.target.value)}/>
  <label>Email Address</label>
  </div>

  <div className="inputBox">
  <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
  <label>Password</label>
  </div>

  <button>Send OTP</button>

  </form>

  </div>
);
}

export default Login;