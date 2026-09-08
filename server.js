const express = require("express")

const app = express()
const userRoutes = require("./routes/userRoutes")
app.use(express.json())
app.use(cors())
app.use("/api/v4",userRoutes)

app.listen(5000,()=>{
    console.log("Hey Donkey, Im listening at 5000")
})

