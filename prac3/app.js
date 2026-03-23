const express = require("express");

const app = express()

const userModel = require("./usermodel");

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.get("/create",async (req,res)=>{
    let createdUser = await userModel.create({
        name: "John Doe",
        email: "test@mail.com",
        password: "abcd"
    })
    res.send(createdUser)
})

app.get("/update",async (req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({name:"John Doe"},)
    res.send(updatedUser)
})

app.get("/read",async (req,res)=>{
    let readUser = await userModel.find()
    res.send(readUser)
})

app.get("/delete",async (req,res)=>{
    let deletedUser = await userModel.findOneAndDelete({name:"John Doe"})
    res.send(deletedUser)
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})