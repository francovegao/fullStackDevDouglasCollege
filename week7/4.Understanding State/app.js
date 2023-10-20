/* const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
]; */

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

 const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
} 

class Counter extends React.Component {

  //state is created so we can update the state of a component
  state = {
    score: 0
  };

  //If arrow function is used you dont need to Bind the object to pass it to the function
  //incrementScore=()=>{  
    incrementScore(){
    //console.log("Hi, from inside increment score");

    //use the previous state as a callback to update the value
    this.setState( prevState => ({
      score: prevState.score+1
    }));
  }

  decrementScore=()=>{
    //console.log("Hi, from inside decrement score");
    if(this.state.score>0){
      this.setState({
        score: this.state.score-1
      })
    }
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}

// /* const App = (props) => {
//   return (
//     <div className="scoreboard">
//       <Header 
//         title="Scoreboard" 
//         totalPlayers={props.initialPlayers.length} 
//       />

//       {/* Players list */}
//       {props.initialPlayers.map( player =>
//         <Player 
//           name={player.name}
//           score={player.score}
//           key={player.id.toString()}            
//         />
//       )}
//     </div>
//   );
// } */

/* ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
); */

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);