const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
const userController = require("./routes/user.routes")
const generalController = require("./routes/general.routes")
const authentication = require("./middlewares/authentication")

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Home page")
})

// middlewares
app.use("/user", userController)
app.use(authentication)
app.use("/general", generalController)

app.listen(8080, async () => {
    try{
        await connection
        console.log("DB connected")
    }
    catch(err){
        console.log("error occur")
        console.log(err)
    }
    console.log("Listning on port 8080")
})