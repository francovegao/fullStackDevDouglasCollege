import React from 'react';

function Button(props) {
    return (
        <div>
            <button type="button" onClick={() => props.newCards()} className="btn btn-dark btn-lg btn-block">Generate New Random Cards</button>
        </div>

    );
}

export default Button;
