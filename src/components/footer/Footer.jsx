import React from "react";
import "./footer.css";
import { Container } from "@material-ui/core";
import bulba from "../../images/bulba.svg";
import charmander from "../../images/charm.svg";
import sq from "../../images/sq.svg";

const Footer = () => {
  return (
    <Container className="footer">
      <div className="img-cont">
        <img src={bulba} alt="footer" className="pokephoto1" />
        <img src={charmander} alt="footer" className="pokephoto2" />
        <img src={sq} alt="footer" className="pokephoto3" />
      </div>
    </Container>
  );
};

export default Footer;
