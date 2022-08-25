import { useState } from "react";
import axios from "axios";
import "./style.css"
function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:5000/user/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

<div className="all">
<h2>LOGIN PAGE</h2>
    <div className="login">
      <input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
    </div>
  );
}

export default Login;
