import React from 'react';
import './footer.css';
import { Container } from '@material-ui/core';

const Footer = () => {
  return (
    <Container className='footer'>
      <div className='img-cont'>
        <img src='images/bulba.svg' alt='footer' className='pokephoto1' />
        <img src='images/charm.svg' alt='footer' className='pokephoto2' />
        <img src='images/sq.svg' alt='footer' className='pokephoto3' />
      </div>
    </Container>
  );
};

export default Footer;
