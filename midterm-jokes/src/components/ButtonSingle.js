import React from 'react';

function ButtonSingle(props) {
    return (
            <button type="button" onClick={() => props.newCardsSingle()} className="btn btn-dark btn-lg btn-block">One Part Jokes</button>
        

    );
}

export default ButtonSingle;
