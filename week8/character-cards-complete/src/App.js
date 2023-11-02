import React, { useState } from 'react';
import CharacterCard from './components/CharacterCard';
import Button from './components/Button';

function App() {
  // generate an array with 8 elements
  const elements = [1, 2, 3, 4, 5, 6, 7, 8];

  var [number, setNumber] = useState(elements)

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
    <div>
      <section id="app">
        <br />
        <div className="container">
          <Button newCards={nextCards} />
          <br></br>
          <nav className="navbar sticky-top navbar-light bg-dark">
            <h1 className="navbar-brand text-light">Rick and Morty</h1>
          </nav>
          <div>
            <h2>Characters</h2>
            <div className="row">
              {number.map(data => <CharacterCard key={data} name={data}/>
              )}
            </div>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
}

export default App;
