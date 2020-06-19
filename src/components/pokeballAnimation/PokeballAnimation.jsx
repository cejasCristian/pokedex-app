import React from 'react';
import { Container } from '@material-ui/core';
import './pokeball.css';

const PokeballAnimation = () => {
  return (
    <Container className='spinner'>
      <img className='rotating ' src='images/pokeballFire.png' alt='master' />
    </Container>
  );
};

export default PokeballAnimation;
