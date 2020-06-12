import React from 'react';
import './pokeCard.css';

const PokeCard = () => {
    return(
        <div className='container'>
            <div className='cards-container'>
                <div className='img-container'>
                    <img src='https://pokeres.bastionbot.org/images/pokemon/1.png' alt='pokemon' id='pokemon-img'/>
                </div>
                <div className='data-container'>
                    <div className='poke-info'>
                        <p>Name: Bulbasaur</p>
                    </div>
                    <div className='poke-info'>
                        <p>ID: 001</p>
                    </div>
                    <div className='poke-info'>
                        <p>Type: Grass</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;