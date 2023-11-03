import React, { useState, useEffect } from 'react';

// Note Component (requires props to get jokes)
function JokeCard(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?type='+[props.type])
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [props.type]);

  return (
    <div className="card">
        <p>
            <b>{data.setup}</b>
            <br></br>
            <br></br>
            {data.delivery}
        </p>
    </div>
  );}

export default JokeCard;
