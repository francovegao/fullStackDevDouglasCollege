import React, { useState, useEffect } from 'react';

// Note Component (requires props to get jokes)
function JokeCardSingle(props) {

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
            <b>{data.joke}</b>
            <br></br>
        </p>
    </div>
  );
}

export default JokeCardSingle;
