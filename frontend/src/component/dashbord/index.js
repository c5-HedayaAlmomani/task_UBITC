

import { Routes, Route, Link } from "react-router-dom";
import Login from "../login";
import Register from "../register";
import Update from "../update";

const Dashbord=()=>{
    return <div>
   <Link to="/login"> Login</Link>
   <Link to="/register"> Sign up</Link>
   <Link to="/update"> update</Link>
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/update" element={<Update/>} />
     
     
      
      </Routes>

    </div>
}

export default Dashbord