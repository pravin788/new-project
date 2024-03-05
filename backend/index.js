const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("../backend/model/User.js")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://praveen:praveen@cluster0.cy7zdhf.mongodb.net/");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/SignUp", (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

// app.get("/",(req,res)=>{
//     // console.log(req);
//   res.send("server is running");
// })


app.listen(5000, () => {
    console.log("server is running")
})