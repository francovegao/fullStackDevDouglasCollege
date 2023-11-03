import React from 'react';

function Button(props) {
    return (
        
            <button type="button" onClick={() => props.newCardsDouble()} className="btn btn-dark btn-lg btn-block">Two Part Joke</button>
       

    );
}

export default Button;
