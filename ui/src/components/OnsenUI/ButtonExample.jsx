import React from 'react';
import { Button } from 'react-onsenui'

export default function ButtonExample() {

  const handleClick = () => {
    alert("Pressed")
  }

  return (
    <>
    <Button onClick={ handleClick } modifier="large--cta">
      Tap Me
    </Button>

    <br />
    <br />
    <Button onClick={handleClick} disabled={ true }>
      Disabled
    </Button>

    <br />
    <br />
    <Button onClick={ handleClick } modifier="quite">
      Quite
    </Button>
    
    <br />
    <br />
    <Button onClick={ handleClick } modifier="quite">
      Quite
    </Button>
    </>
  );
}
