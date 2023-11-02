import './App.css';
import React, { useState } from 'react';
import JokeCard from './components/JokeCard';
import Button from './components/Button';

function App() {
    // generate an array with 8 elements
    const elements = [1,2,3,4,5,6,7,8];

    var [number, setNumber] = useState(elements)
    var[visibility, setVisibility]= useState(false)
  
     function nextCards() {
       var increaseBy = Math.floor(Math.random() * 50);
      for (let i = 0; i < elements.length; i++) {
        number[i] += increaseBy;
      } 
      // create a new array from the number elements
      setNumber([...number])
      console.log(number)
    } 


  return (
    <div className="App">
        <div className="container">
            <h2>Two Part Jokes</h2>
            <div className="row">
              {number.map(data => <JokeCard key={data} name={data}/>
              )}
            </div>
            <br></br>
            <div>
          <Button newCards={nextCards} />
         
          </div>
          <br />
        </div>

    </div>
  );
}

export default App;
