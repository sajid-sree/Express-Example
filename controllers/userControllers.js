const  fs = require("fs")
const { get } = require("http")

const getProfile =(req,res)=>{
    res.json({
        "name":"Aryan verma",
        "age":99,
        "status":"Not Happy"
    })
}


const createUser = (req,res)=>{
        //console.log(req.body)
        let data = req.body
        fs.writeFile("abc.txt",`Username : ${data.username} , Mobile: ${data.mobile}`,()=>{
            res.json({"message":"data uploaded successfully"})
        })
        
}

module.exports = {getProfile,createUser};