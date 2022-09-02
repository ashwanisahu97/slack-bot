import { Button, Input , Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const handleNameChange = (e) => {
         setName(e.target.value)
         console.log(name,"ntn")
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log("nn")
    }

    const handlePaasordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const payload ={
            name,
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
        <Box>
            <br/>
             <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}></Input> 
            <br/>
            <Input type="email" placeholder="email" value={email} onChange={handleEmailChange}></Input> 
            <br/>
            <Input type="password" placeholder="password" value={password} onChange={handlePaasordChange}></Input>
            <br/>
            <Button onClick={handleSubmit}>Register</Button>
        </Box>
    )
}

export  {Register};
