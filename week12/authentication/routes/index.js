var express = require('express');
var router = express.Router();
var User = require('../models/user');
const { Error } = require('mongoose');


router.get('/profile', function (req, res, next) {
  console.log("profile route called")
  console.log(req.session.userId)
  if (!req.session.userId) {
    var err = new Error('You are not authorized to view this page.');
    err.status = 403;
    return next(err);
  }
  User.findById(req.session.userId)
    .then((user) => { return res.render('profile', { title: 'Profile', name: user.name, favorite: user.favoriteBook }) })
    .catch((err) => {
      return next(err)
    })
})

// GET /login
router.get('/login', function (req, res, next) {
  return res.render('login', { title: 'Log In' });
});

// POST /login
router.post('/login', async (req, res, next) => {
  console.log("login post route called")
  const { email, password } = req.body;
  console.log(email)
  console.log(password)
  try {
    const user = await User.authenticate(email, password);
    req.session.userId = user._id;
    res.redirect('/profile')
  }
  catch (error) {
    return next(error)
  }
})




// GET /register
router.get('/register', function (req, res, next) {
  return res.render('register', { title: 'Sign Up' });
});

// POST /register
router.post('/register', function (req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.favoriteBook &&
    req.body.password &&
    req.body.confirmPassword) {

    // confirm that user typed same password twice
    if (req.body.password !== req.body.confirmPassword) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      return next(err);
    }

    // create object with form input
    var userData = {
      email: req.body.email,
      name: req.body.name,
      favoriteBook: req.body.favoriteBook,
      password: req.body.password
    };

    // use schema's `create` method to insert document into Mongo
    User.create(userData)
      .then((result) => {
        console.log("user created")
        return res.redirect('/profile')
      })
      .catch((err) => {
        return next(err)
      })

  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET /
router.get('/', function (req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function (req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function (req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
