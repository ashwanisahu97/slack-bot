import React, {useState, useEffect} from "react";
import CreateNotes from "./CreateNotes";
import { useParams,useNavigate } from "react-router-dom";
// import { Delete } from "./Delete";
const Notes = () => {
   const token = localStorage.getItem("token")
   const {id} = useParams();
   const [data , setData]=useState([])
   const userId=id;
   const navigate=useNavigate()
    const getNotes = async() => {
       
        await fetch(`http://localhost:8080/general/read`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}` ,
                userId
            }, 
        })
        .then((res) => res.json())
        .then((res) => {
            setData([...res]);
        })
        .catch((err) => console.log(err)) 
    }
    const getAdd=async(payload)=>{
      await fetch("http://localhost:8080/general/create", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }, 
        }).then((res)=>{
          getNotes()
        }).catch((err)=>{
            alert("something went wrong")
        })
    }
    useEffect(() => {
      getNotes()
    }, [])

   console.log(data)
   const editing=(edit)=>{
navigate(`/notes/${id}/${edit}`)
   }
   const Delete=async(noteId)=>{
    await fetch(`http://localhost:8080/general/${noteId}/delete`, {
      method : "DELETE",
      body : JSON.stringify({userId}),
      headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }, 
  }).then((res)=>{
    getNotes()
  }).catch((err)=>{
      alert("something went wrong")
  })
   }
    return (token)?(
        <div style={{marginTop:"100px"}}>
       <CreateNotes add={getAdd}/>
       <table  style={{margin:"auto", }}>
          <thead >
            <tr>
              <th><h2>Task Name</h2></th>
              <th> <h2>Status</h2></th>
              <th> <h2>Tag</h2></th>
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody >
            
           { data?.map((el)=>(
               <tr >
               <td> {el.taskname} </td>
               <td> {el.status} </td>
                
               <td> {el.tag} </td>
              <td><button colorScheme={"blue"} onClick={()=> editing(el._id)}>Edit</button> </td>
              <td><button colorScheme={"red"} onClick={()=> Delete(el._id)}>Delete</button></td>
             </tr>
             ))} 
          </tbody>
        </table>
       </div>
    ):(
<h3>Please login again</h3>
    )
    
}

export  {Notes};