const mongoose = require('mongoose');

//create and/or connect to a db
mongoose.connect('mongodb://localhost:27017/usersDB2', {
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
const User = mongoose.model('User', userSchema);


User.updateOne({_id: '5f1681eeb0129c2b24eb7fc4'}, {name:'Alice Updated'}, function(err){
    if (err) {
        console.log(err);
      } else {
          console.log('marking')
    // console.log(users);
    // if we want to show only the names the following code does
}
});

User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
  
      // console.log(users);
      // if we want to show only the names the following code does
      users.forEach(function(fruit){
          console.log(fruit.name)
  
      // closing the connection: good practice
      mongoose.connection.close();
  
      } )
    }
  });
