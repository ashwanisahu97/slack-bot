const express = require("express")

const GeneralModel  = require("../models/General.model")

const generalController = express.Router();


generalController.post("/create", async (req, res) => {
    const {taskname, userId} = req.body;
    const new_note = new GeneralModel({
        taskname,
       
        userId
    })
    // console.log(new_note,"nn")
    await new_note.save()
    res.send({"message": "note created", new_note}) 
})

// for getting the read properties we have to paste the Bearer token and Authorization from the post method. in the hedder portion.
// then we can read the given data in postman.
generalController.get("/read", async (req, res) => {
    const userId= req.headers.userid
    console.log(userId)
   const notes = await GeneralModel.find({userId})
   res.send(notes)
 
})


generalController.patch("/:noteId/edit", async (req, res) => {
   const {noteId} = req.params;
   const {userId} = req.body;
//    console.log(todoId,userId)
   const note = await GeneralModel.findOne({_id: noteId})
   if(note.userId === userId){
       const new_note =  await TodosModel.findOneAndUpdate({_id: todoId}, req.body, {new: true})
       return res.send({"message": "sucessfully updated", new_note})
   }
   else{
    res.send("you are not authorize to do it")
   }
    
})


generalController.delete("/:noteId/delete", async (req, res) => {
    const {noteId} = req.params;
    const {userId} = req.body;
    const note = await GeneralModel.findOne({_id: noteId})
    if(note.userId === userId){
         await TodosModel.findOneAndDelete({_id: noteId})
        return res.send({"message": "sucessfully deleted"})
    }
    else{
     res.send("you are not authorize to do it")
    }
     
 })


module.exports = generalController