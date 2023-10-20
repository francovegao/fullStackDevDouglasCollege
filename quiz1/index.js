import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

let users=[];
let string="";

app.get("/",(req,res)=>{
    //res.send("<h2>Hello User</h2>");
    try{
        res.render("index.ejs");
    }catch(err){
        res.render("index.ejs",{error: err.message});
    }
})

app.post("/",async(req,res)=>{
    try{
        const userName = req.body;
        res.render("index.ejs", {data: userName});
    }catch(err){
        res.render("index.ejs",{error: err.message});
    }
})

app.get("*",(req,res)=>{
    res.render("notFound.ejs");
})




app.listen(3000, ()=>{
    console.log(`The server is up and running on port ${port}`)
})