const express = require('express');
const app = express();
const path = require('path');
const userModel = require("./models/user.model");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/create",async (req,res)=>{
    const {name,email,img} = req.body;
    const createdUser = await userModel.create({
        name,
        email,
        img
    })
    res.redirect("/read");
})

app.get("/read",async (req,res)=>{
    let allUsers= await userModel.find();
    res.render("read",{users:allUsers});
})

app.get("/delete/:id",async (req,res)=>{
    let deletedUser = await userModel.findOneAndDelete({_id:req.params.id})
    res.redirect("/read")
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})