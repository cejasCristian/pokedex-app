import React from "react";
import { Container } from "@material-ui/core";
import "./pokeball.css";
import pokeball from "../../images/pokeballFire.png";

const PokeballAnimation = () => {
  return (
    <Container className="spinner">
      <img className="rotating " src={pokeball} alt="master" />
    </Container>
  );
};

export default PokeballAnimation;
