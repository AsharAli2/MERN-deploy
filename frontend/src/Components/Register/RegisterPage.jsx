import React, { useState } from 'react';
import './RegisterPage.css'; 
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const textchange = (ev) => {
      const { value, name } = ev.target;
      if (name === "userName") {
        setuserName(value);
      }
      if (name === "password") {
        setpassword(value);
      }
      
    };
    const submit = async () => {
      const userData={userName,password};
      const response= await fetch('/user/register',{
        method:"POST",
        headers:{
            'Content-Type':"application/json",

        },
        body: JSON.stringify(userData)
      })
      const data = await response.json()
      console.log(data.user);
      if(data.user){
        navigate("/login")
      }
      
    }



  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <input
          type="username"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={textchange}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={textchange}
        />
        <button onClick={submit}>Register</button>
        </div>
    </div>
  );
};

export default RegisterPage;
