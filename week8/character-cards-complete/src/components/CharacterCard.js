import React, { useState, useEffect } from 'react';

function CharacterCard(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/' + props.name)
      .then(response => response.json())
      .then(data => setData(data))
      .then(console.log(data))
      .catch(error => console.log(error))
  }, [props.name]);

  return (
    <div className="col-3">
      <div className="card">
        <img
          src={data.image}
          alt="Rick Sanchez"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{data.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
