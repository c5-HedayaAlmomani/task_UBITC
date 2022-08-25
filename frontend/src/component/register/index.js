import { useState } from "react";
import axios from "axios";
function Register() {
  const [fistName, setFistName] = useState("");

  const [lastName, setLastname] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("http://localhost:5000/user", {
        fistName,
        lastName,
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
      <h2>REGISTER PAGE</h2>
      <div className="login">
        <input
          placeholder="First Name"
          onChange={(e) => {
            setFistName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Last Name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        ></input>
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
            register();
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Register;
