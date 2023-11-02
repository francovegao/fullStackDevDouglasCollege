import React, { useState, useEffect } from 'react';

function JokeCard(props) {

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
      .then(response => response.json())
      .then(data => setData(data))
      .then(console.log(data))
      .catch(error => console.log(error))
  }, [props.name]);

  return (
    <div className="col-3">
      <div className="card">
      <div class="card-header">
        Category: {data.category}
       </div>
        <div className="card-body">
          <h3 className="card-title">{data.setup}</h3>
          {show ? null : <a href="#" class="btn btn-primary" onClick={() => setShow(currentShow => !currentShow)}>Answer</a> }
           {show ?  <p className="card-text">{data.delivery}</p> : null }
        </div>
      </div>
    </div>
  );
}

export default JokeCard;
