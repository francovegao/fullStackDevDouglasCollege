const mongoose = require('mongoose')

//create and/or connect to a db
mongoose.connect("mongodb://localhost:27017/usersDB2", {
  useNewUrlParser: true,
});
//creating schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    fav_pizza: String,
    space_invaders: Number,
  });

// defining model
const User = mongoose.model("User", userSchema);

User.find(function (err, users) {
  if (err) {
    console.log(err);
  } else {

    // console.log(users);
    // if we want to show only the names the following code does
    users.forEach(function(user){
        console.log(user.name)

    // closing the connection: good practice
    mongoose.connection.close();

    } )

  }
});
