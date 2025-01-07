import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] =useState({});
    const [selectedFile, setSelectedFile]= useState(null);
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }
    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
    }
    const handleSubmit=async()=>{
       
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append('upload_preset', 'wbtcvi6u');
        formData.append('cloud_name', 'dyfr12jd5');
        const response = await axios.post('https://api.cloudinary.com/v1_1/dyfr12jd5/image/upload', formData);
        console.log(response.data.url);
        const myimg=response.data.url;
        let api="http://localhost:8000/mycloudenary/datasave";

        axios.post(api, {...input, images:myimg}).then((res)=>{
            alert("data save !!!");
        })
    }

    return(
        <>
          <h1> Insert book Data</h1>

          Enter Rollno  : <input type="text" name="rollno" 
          value={input.rollno}  onChange={handleInput}/>
          <br/>
          Enter name : <input type="text" name="name" 
          value={input.name}  onChange={handleInput}/>
          <br/>
          Enter city : <input type="text" name="city"
          value={input.city}  onChange={handleInput}/>
          <br/>
          Upload Images : <input type="file" name="file" onChange={handleFileChange}  />
          <br/>
          <br/>
          <button onClick={handleSubmit}>Save!</button>
        </>
    )
}

export default Insert;