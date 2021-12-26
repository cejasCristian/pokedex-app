import React from "react";
import "./pokeCard.css";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Image from "material-ui-image";
import bg from "../../images/legend.png";

const PokeCard = () => {
  const pokemonInfo = useSelector((state) => state.getPokeData.pokeData);

  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`;

  console.log(useSelector((state) => state));

  //capitalize de first letter of a word
  const upperFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Container className="general">
      {!pokemonInfo.name ? (
        <>
          <Container className="initial-img">
            <Image
              src={bg}
              className="pokemonEmpty-img"
              alt="pokemon"
              aspectRatio={2.39 / 1}
              color="transparent"
            />
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" className="grid-container">
                  <Grid className="grid-1">
                    <img src={pokeImage} alt="pokemon" id="pokemon-img" />
                  </Grid>
                  <Grid>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>Name: {upperFirst(pokemonInfo.name)}</p>
                    </div>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>ID: {pokemonInfo.id}</p>
                    </div>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>Type: {pokemonInfo.types[0].type.name}</p>
                    </div>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>Weight: {pokemonInfo.weight / 10} kg</p>
                    </div>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>Height: {pokemonInfo.height / 10} m</p>
                    </div>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>
                        Ability:{" "}
                        {upperFirst(pokemonInfo.abilities[0].ability.name)}
                      </p>
                    </div>
                    <div className={pokemonInfo.types[0].type.name}>
                      <p>Move: {upperFirst(pokemonInfo.moves[0].move.name)}</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </Container>
  );
};

export default PokeCard;
