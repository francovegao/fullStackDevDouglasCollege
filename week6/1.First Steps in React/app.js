/* const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title' },
  'My First React Element!'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM.'
); */

//**************************************************************************************************
//We need to add the babel type to the script link in the html
//transform react components into JSX
/* const title = <h1 id="main-title">My First React Element!</h1>;
const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;


const header = React.createElement(
  'header',
  null,
  title,
  desc
); */

//*********************************************************************************************************** */
//using some variables to use javascript into HTML code
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const myName = 'Oliver';

const header =(
  <header>
    <h1 id={myTitleID}>{ myName }'s First React Element!</h1> 
    <p className="main-desc">{ desc }</p>
    <br></br>
    <p>I have {2*2} assignments</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);