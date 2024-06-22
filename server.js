// import express and config
import express from "express";
const app = express();
app.use(express.json());


// import dotenv
import dotenv from "dotenv";
dotenv.config({path:"./config/config.env"});



// get requist


app.get("/",(req, res)=>{
    res.send("hello world");
})










app.listen(3001, ()=>{
    console.log("http://localhost:3001/")
})