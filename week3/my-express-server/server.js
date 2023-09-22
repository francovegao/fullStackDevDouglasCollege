import express from "express";

const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my home page</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>My name is Oliver</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>My email is oliver@gmail.com</h1>");
})

app.get("/courses",(req,res)=>{
    res.send("<ul><li>CSIS 3380</li><li>CSIS 4270</li></ul>");
})

app.get("*",(req,res)=>{
    res.send("<h2>Invalid URL</h2>");
})

app.post("/register",(req,res)=>{
    res.sendStatus(201);
})

app.put("/login",(req,res)=>{
    res.sendStatus(200);
})

app.patch("/login/password",(req,res)=>{
    res.send("Invalid url");
})

app.delete("/login",(req,res)=>{
    res.sendStatus(404);
})

app.listen(3000, ()=>{
    console.log(`The server is up and running on port ${port}`)
})