const Name = (props) => {
  return <h1>{props.count}</h1>;
};
const Button = (props) => <button onClick={props.handleClick}>+</button>;

class Counter extends React.Component {
  state = { count: 0 };
  
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <Name count={this.state.count} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
// export default App;
