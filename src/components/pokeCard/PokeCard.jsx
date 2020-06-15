import React from 'react';
import './pokeCard.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PokeCard = () => {

    const pokemonInfo = useSelector((state) => state.getPokeData.pokeData)

    const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemonInfo.id}.png`

    return(
        <div className='container'>
            <div className='cards-container'>
                {(!pokemonInfo.name) ? (
                    <>
                        <div className='imgEmpty'>
                            <img src='images/legend.png' alt='pokemon' className='pokemonEmpty-img'/>
                        </div>
                    </>
                ) : (
                        <>
                        <div className='img-container'>
                            <img src={pokeImage} alt='pokemon' id='pokemon-img'/>
                        </div>
                        <div className='data-container'>
                            <div className='poke-info'>
                                <p>Name: {pokemonInfo.name}</p>
                            </div>
                            <div className='poke-info'>
                                <p>ID: {pokemonInfo.id}</p>
                            </div>
                            <div className='poke-info'>
                                <p>Type: </p>
                            </div>
                            <div className='poke-info'>
                                <p>Evolves to: </p>
                            </div>
                            <div className='poke-info'>
                                <p>Weight: </p>
                            </div>
                            <div className='poke-info'>
                                <p>Height: </p>
                            </div>
                            <div className='poke-info'>
                                <p>Ability:</p>
                            </div>
                        </div>
                        </>
                    )}
            </div>
        </div>
    );
}

PokeCard.propTypes = {
    
};

PokeCard.defaultProps = {
    
};


export default PokeCard;