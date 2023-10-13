//use a function instead of a variable to save the HTML
/* function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
} */

//Using arrow function instead of normal function
/* const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 2</span>
    </header>
  );
}

const Footer = () => {
  return (
    <header>
      <h1>Copyright 2022</h1>
    </header>
  );
}


const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Oliver
      </span>

      <Counter />
    </div>
  );
}

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">0</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header />

    
      <Player />
      <Player />
      <Player />
      <Player />
      <Footer />
 
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); */

const Card = (props) =>{
  return(
    <li>
          <CardTitle number={props.number}/>
          <CardDescription />
    </li>
  );
}

const CardTitle = (props) =>{
  return(
    <h2>Card {props.number}</h2>
  );
}

const CardDescription = () =>{
  return(
    <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
    </p>
  );
}

const App = () => {
  return (
    <ul className="flex cards">
       <Card 
       number="1"/>
       <Card 
       number="2"/>
       <Card 
       number="3"/>
       <Card 
       number="4"/>
       <Card 
       number="5"/>
       <Card 
       number="6"/>
       <Card 
       number="7"/>
       <Card 
       number="8"/>
       <Card 
       number="9"/>
       <Card 
       number="10"/>
    </ul>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);