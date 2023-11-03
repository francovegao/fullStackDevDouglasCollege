import React from 'react';
import Button from './Button';
import ButtonSingle from './ButtonSingle';

// Header Component
function Header(props) {
    // Code
    return(
      <header>
        <h1>Awesome Random Jokes</h1>
        <ButtonSingle newCardsSingle={props.newCardSingle} />
        <Button newCardsDouble={props.newCardsDouble} />
      </header>
    );
  }

  export default Header;