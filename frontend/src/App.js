
import React, { useState, createContext } from "react";

import Dashbord from "./component/dashbord"
 export const UserContext = createContext();


const App=()=> {

  const [img, setImg] = useState('');
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <div className="App">
   
   



      <UserContext.Provider
       
          value={{img, setImg,token, setToken}}
       
      >
        <Dashbord/>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
