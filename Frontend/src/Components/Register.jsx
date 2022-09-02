import React from "react";
import { useState } from "react";


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
        await fetch("http://localhost:8080/user/register", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }, 
        })
    }
    return(
        <div>
            <br/>
            <input type="email" placeholder="email" value={email} onChange={handleEmailChange}></input> 
            <br/>
            <input type="password" placeholder="password" value={password} onChange={handlePaasordChange}></input>
            <br/>
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export  {Register};
