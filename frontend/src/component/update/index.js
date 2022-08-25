
import { useState } from "react";
import axios from "axios";
import "./style.css"
const Update=()=>{
  const img="./mm.png"
    const [fistName, setFistName] = useState("");

    const [lastName, setLastname] = useState("");
  
    const [email, setEmail] = useState("");
  
    const [password, setPassword] = useState("");
  

    const update = () => {
        axios
          .put("http://localhost:5000/user", {
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

    return <div className="alll">




{/* 
<div className="update" >
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
            update();
          }}
        >
          Update
        </button>
      </div> */}






      {/* <div>
        <h3>Edit Profile</h3>
    <img/>
      </div>

      <img/>


      <h3>Full Name</h3>
      <input></input>
      <h3>Email</h3>
      <input></input>
      */}

    </div>
}

export default Update