const mongoose = require("mongoose")


const generalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    note: {type: String, required: true},
    label: {type: String, required: true},
    userId: {type: String, required: true}
})

const GeneralModel = mongoose.model("note", generalSchema)


module.exports = GeneralModel

