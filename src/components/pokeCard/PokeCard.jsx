import React from 'react';
import './pokeCard.css';
import { useSelector } from 'react-redux';

const PokeCard = () => {

    const pokemonInfo = useSelector((state) => state.getPokeData.pokeData)

    const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemonInfo.id}.png`

    const colorType = () => {
        
        let type= '';

        switch(pokemonInfo.types[0].type.name) {
            case 'grass':
                type = 'grass'
                break;
            case 'normal':
                type = 'normal'
                break;
            case 'fighting':
                type = 'fighting'
                break;
            case 'flying':
                type = 'flying'
                break;
            case 'poison':
                type = 'poison'
                break;
            case 'rock':
                type = 'rock'
                break;
            case 'bug':
                type = 'bug'
                break;
            case 'ghost':
                type = 'ghost'
                break;
            case 'steel':
                type = 'steel'
                break;
            case 'fire':
                type = 'fire'
                break;
            case 'water':
                type = 'water'
                break;
            case 'electric':
                type = 'electric'
                break;
            case 'psychic':
                type = 'psychic'
                break;
            case 'ice':
                type = 'ice'
                break;
            case 'dragon':
                type = 'dragon'
                break;
            case 'dark':
                type = 'dark'
                break;
            case 'fairy':
                type = 'fairy'
                break;
            default:
                type = 'dark'
                break;
        }

        return type;
    }

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
                            <div className={colorType()}>
                                <p>Name: {pokemonInfo.name}</p>
                            </div>
                            <div className={colorType()}>
                                <p>ID: {pokemonInfo.id}</p>
                            </div>
                            <div className={colorType()}>
                                <p>Type: {pokemonInfo.types[0].type.name}</p>
                            </div>
                            <div className={colorType()}>
                                <p>Weight: {pokemonInfo.weight/10} kg</p>
                            </div>
                            <div className={colorType()}>
                                <p>Height: {pokemonInfo.height/10} m</p>
                            </div>
                            <div className={colorType()}>
                                <p>Ability: {pokemonInfo.abilities[0].ability.name}</p>
                            </div>
                            <div className={colorType()}>
                                <p>Move: {pokemonInfo.moves[0].move.name}</p>
                            </div>
                        </div>
                        </>
                    )}
            </div>
        </div>
    );
}

export default PokeCard;