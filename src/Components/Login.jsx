import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePaasordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const payload ={
            email,
            password
        }
        const response = await fetch("http://localhost:8080/user/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }, 
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            const {id}=res;
            console.log(id,"d")
            alert("Login Success")
            localStorage.setItem("token", res.token)
           navigate(`/todos/${id}`)
        })
        .catch((err) => alert("Login Failed")
        
        )
       
        
    }
    return(
        <div>
            <br/>
            <input type="email" placeholder="email" value={email} onChange={handleEmailChange}></input> 
            <br/>
            <input type="password" placeholder="password" value={password} onChange={handlePaasordChange}></input>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export  {Login};
