const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    taskname: {type: String, required: true},
    status: {type: String, required: true},
    tag: {type: String, required: true},
    userId: {type: String, required: true}
})

const TodosModel = mongoose.model("todos", todoSchema)


module.exports = TodosModel
