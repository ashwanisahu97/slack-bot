import React, { useState } from "react";
import { Button, Input , Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const Login = () => {
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
        const response = await fetch("http://localhost:8080/user/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }, 
        })
        .then((res) => res.json())
        .then((res) => {

            localStorage.setItem("token", res.token)
            Navigate("/dashbord")
        })
        .catch((err) => console.log(err))
        // console.log(response)
    }
    return(
        <Box>
            <br/>
            <Input type="email" placeholder="email" value={email} onChange={handleEmailChange}></Input> 
            <br/>
            <Input type="password" placeholder="password" value={password} onChange={handlePaasordChange}></Input>
            <br/>
            <Button onClick={handleSubmit}>Login</Button>
        </Box>
    )
}

export  {Login};
