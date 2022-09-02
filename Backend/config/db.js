const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/slack-bot")

module.exports = connection


//mongodb+srv://ashwini_mishra:8252672662@cluster0.izr7bmg.mongodb.net/slack-bot?retryWrites=true&w=majority