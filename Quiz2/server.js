require('dotenv').config()
const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = process.env.PORT || 3000;
user = process.env.USERID
pw = process.env.PW
uri = `mongodb+srv://${user}:${pw}@cluster0testfullstackdo.mxhexez.mongodb.net/Exams23001`

mongoose.connect(
  uri
);
 
// Create a Schema object
const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sid: { type: String, required: true },
});

// This Activitry creates the collection called activitimodels
const Quizmodel = mongoose.model('quizexamrecords', quizSchema);

app.get('/', (req, res) => {
  const student = new Quizmodel({
    name : 'Oliver Franco',
    sid : '300365472',
  });

  Quizmodel.insertMany([student]);

  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
