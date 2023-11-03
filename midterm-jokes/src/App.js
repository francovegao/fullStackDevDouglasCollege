import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JokeCard from './components/JokeCard';
import JokeCardSingle from './components/JokeCardSingle';
import Button from './components/Button';

function App() {
    // generate an array with 8 elements
    const elements = [1,2,3,4,5,6,7,8,9];

    var [number, setNumber] = useState(elements)
    var[type, setType]= useState("twopart")

    function double(){
      setType("double");
    
    }

    function single(){
      setType("single");
     
    }


  return (
    <div className="App">
      <Header newCardSingle={single} newCardsDouble={double}/>
      <div className="gallery">
      {type=="single" ? (
             number.map(data => <JokeCardSingle key={data} name={data} type={type}/>) 
            ) : (
              number.map(data => <JokeCard key={data} name={data} type={type}/>) 
            )}
          
            </div>
            <br></br>
       <Footer />
    </div>
  );
}

export default App;
