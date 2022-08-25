
import { useState } from "react";
import axios from "axios";

import Upload from "../clawdenary";
import  { useContext } from "react";
import { UserContext} from "../../App";
import "./style.css"
 
const Update=()=>{
    let {img, setImg ,token, setToken } = useContext(UserContext);
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
            img
          },{
            headers: {
              authorization: "Bearer " + token,
            },
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });

      };

    return <div className="alll">


<Upload />


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

        <button className="upd"
          onClick={() => {
            update();
            console.log({ll:img});
          }}
        >
          Update
        </button>
      </div>








    </div>
}

export default Update