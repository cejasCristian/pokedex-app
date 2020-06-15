import React from 'react';  
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='img-cont'>
                <img src='images/bulba.svg' alt='footer' className='pokephoto1'/>
                <img src='images/charm.svg' alt='footer' className='pokephoto2'/>
                <img src='images/sq.svg' alt='footer' className='pokephoto3'/>
            </div>
        </footer>
    );
}

export default Footer;