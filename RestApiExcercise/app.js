const express = require('express');
const app = express();

//reading the data using a ORM called records**********************************
const records = require('./records');

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to home page/h1>");
  });


//Get all users with GET request to /getusers
app.get('/getusers', async (req, res)=>{
    try{
        const users = await records.getUsers();
        res.json(users);
      } catch(err){
        res.json({message: err.message});
      }
  });

  //Get single user with GET request to /getusers/id
app.get('/getusers/:id', async (req, res)=>{
    try {
        const user = await records.getUser(req.params.id);
        if(user){
            res.json(user);
        } else {
            res.status(404).json({message: "User not found."});
        }
        
    } catch(err) {
        res.status(500).json({message: err.message});
    }
  });

  //Get a random user with GET request to /getrandomuser
  app.get('/getrandomuser', async (req, res)=>{
    try{
        const user = await records.getRandomUser();
        res.json(user);
      } catch(err){
        res.status(500).json({message: err.message});
        }
  });

  //Post a new user with POST to /newuser
  app.post('/newuser', async (req,res)=>{
    try {
        if(req.body.email && req.body.username){
            const user = await records.createUser({
                username: req.body.username,
                email: req.body.email
            });
            res.status(201).json(user);
        } else {
            res.status(400).json({message: "Email and username required!"});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    } 
  });

  //Update repository with PUT to /user/id
  app.put('/user/:id', async (req,res)=>{
    try {
        const user = await records.getUser(req.params.id);
        if(user){
            user.username = req.body.username;
            user.email = req.body.email;
  
            await records.updateUser(user);
            res.status(204).json(user);
        } else {
            res.status(404).json({message: "User Not Found"});
        }
        
    } catch(err){
        res.status(500).json({message: err.message});
    }
  });

  //Delete repository user with DELETE to /user/id
  app.delete('/user/:id', async (req,res)=>{
    try {
        const user = await records.getUser(req.params.id);
        await records.deleteUser(user);
        res.status(204).end();
    } catch(err){
        res.status(500).json({ message: err.message });
    }
  });

  //Error handling, middleware
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
  });


app.listen(3000, () => console.log('Server started on port 3000!'));