var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  favoriteBook: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

// authenticate input against database documents
UserSchema.statics.authenticate = async function (email, password) {
  try {
    const user = await this.findOne({ email: email });

    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Incorrect password');
    }

    console.log(user)

    return user; // Return user if authentication is successful
  }
  catch (error) {
    throw new Error(error);
  }
}


// hash password before saving to database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
