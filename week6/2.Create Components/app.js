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
const Header = () => {
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

      {/* Players list */}
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
);