import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./searchBar.css";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getNameActions } from "../../redux/actions";
import logo from "../../images/pokelogo.png";
import pokeball from "../../images/pokeball.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingTop: 3,
    flexGrow: 0.36,
  },
  inputRoot: {
    color: "inherit",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    borderColor: "black",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(getNameActions.setName(value));
  };

  const pokemons = useSelector((state) => state.fetch.pokemon);

  return (
    <Container>
      {/* <div className={classes.root}> */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="master" id="pokelogo" />
          </Typography>
          {/* <div className={classes.search}> */}
          <Autocomplete
            id="combo-box-demo"
            options={pokemons}
            getOptionLabel={(pokemons) => pokemons}
            style={{ width: 500, paddingTop: 13 }}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pokemon name..."
                variant="outlined"
              />
            )}
          />
          {/* </div> */}
          <img src={pokeball} alt="master" id="pokeball" />
        </Toolbar>
      </AppBar>

      {/* </div> */}
    </Container>
  );
};

export default SearchBar;
