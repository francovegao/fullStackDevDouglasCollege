const express = require('express');
const app = express();

//reading the data direcly**********************************
/* const data = require ('./data.json')
console.log(data) 

// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', (req, res)=>{
  res.json(data);
});


// Send a GET request to quotes/:id to READ (view) a quote 
app.get('/quotes/:id', (req, res)=>{
  console.log(req.params.id);
  const quote = data.records.find(quote => quote.id == req.params.id);
  res.json(quote);
});*/

//reading the data using a ORM called records**********************************
const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', async (req, res) => {
  try{
    const quotes = await records.getQuotes();
    res.json(quotes);
  } catch(err){
    res.json({message: err.message});
  }

});

// Send a GET request to /quotes/:id to READ(view) a quote
/* app.get('/quotes/:id', async (req, res) => {
  console.log(req.params.id);
  const quote = await records.getQuote(req.params.id);
  res.json(quote);
}); */
// Send a GET request to /quotes/:id to READ(view) a quote
app.get('/quotes/:id', async (req, res)=>{
  try {
      const quote = await records.getQuote(req.params.id);
      if(quote){
          res.json(quote);
      } else {
          res.status(404).json({message: "Quote not found."});
      }
      
  } catch(err) {
      res.status(500).json({message: err.message});
  }
});

//Send a POST request to /quotes to  CREATE a new quote
/* app.post('/quotes', async (req, res) => {
  const quote = await records.createQuote({
    quote: req.body.quote,
    author: req.body.author,
  });
  res.json(quote);
}); */
app.post('/quotes', async (req,res) =>{
  try {
      if(req.body.author && req.body.quote){
          const quote = await records.createQuote({
              quote: req.body.quote,
              author: req.body.author
          });
          res.status(201).json(quote);
      } else {
          res.status(400).json({message: "Quote and author required."});
      }

  } catch(err) {
      res.status(500).json({message: err.message});
  } 
});

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
app.put('/quotes/:id', async(req,res) => {
  try {
      const quote = await records.getQuote(req.params.id);
      if(quote){
          quote.quote = req.body.quote;
          quote.author = req.body.author;

          await records.updateQuote(quote);
          res.status(204).end();
      } else {
          res.status(404).json({message: "Quote Not Found"});
      }
      
  } catch(err){
      res.status(500).json({message: err.message});
  }
});

// Send a DELETE request to /quotes/:id DELETE a quote 
app.delete("/quotes/:id", async(req,res) => {
  try {
      const quote = await records.getQuote(req.params.id);
      await records.deleteQuote(quote);
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

app.listen(3000, () => console.log('Quote API listening on port 3000!'));