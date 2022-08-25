import axios from "axios";
import React, { useState } from "react";
import  { useContext } from "react";
import { UserContext} from "../../App";
import "./style.css"
function Upload() {
  let {img, setImg } = useContext(UserContext);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "maxqgc69");
    setLoading(true);
    await axios
      .post(`https://api.cloudinary.com/v1_1/hudhud/image/upload`, data)
      .then((result) => {
        console.log(result.data.secure_url);
        setImage(result.data.secure_url);
        setImg(result.data.secure_url);
       
        setLoading(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="upload">
       {!loading ? <div className="imm" style={{background:"none"}}><p></p></div> : <img className="img_cloudenary" src={image} style={{ width: "300px" }} />}
     


      <input 
      placeholder="Upload an image"
        type="file"
        name="file"
        
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
       <button className="sub"
        onClick={(e) => {
          uploadImage(e);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Upload;
