const express = require("express")

const TodosModel  = require("../models/Todos.model")

const todosController = express.Router();


todosController.post("/create", async (req, res) => {
    const {taskname, status, tag, userId} = req.body;
    const new_note = new TodosModel({
        taskname,
        status,
        tag,
        userId
    })
    console.log(new_note,"nn")
    await new_note.save()
    res.send({"message": "note created", new_note}) 
})

// for getting the read properties we have to paste the Bearer token and Authorization from the post method. in the hedder portion.
// then we can read the given data in postman.
todosController.get("/read", async (req, res) => {
    const userId= req.headers.userid
    console.log(userId)
   const notes = await TodosModel.find({userId})
   res.send(notes)
 
})


todosController.patch("/:noteId/edit", async (req, res) => {
   const {noteId} = req.params;
   const {userId} = req.body;
   console.log(todoId,userId)
   const note = await TodosModel.findOne({_id: noteId})
   if(note.userId === userId){
       const new_note =  await TodosModel.findOneAndUpdate({_id: todoId}, req.body, {new: true})
       return res.send({"message": "sucessfully updated", new_note})
   }
   else{
    res.send("you are not authorize to do it")
   }
    
})


todosController.delete("/:noteId/delete", async (req, res) => {
    const {noteId} = req.params;
    const {userId} = req.body;
    const note = await TodosModel.findOne({_id: noteId})
    if(note.userId === userId){
         await TodosModel.findOneAndDelete({_id: noteId})
        return res.send({"message": "sucessfully deleted"})
    }
    else{
     res.send("you are not authorize to do it")
    }
     
 })


module.exports = todosController