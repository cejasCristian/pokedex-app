import React, {useState, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './searchBar.css';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        paddingTop: 3,
        flexGrow: 0.4,
    },
    inputRoot: {
        color: 'inherit',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        borderColor: 'black',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchBar = () => {

    const classes = useStyles();

    const [pokename, setPokename] = useState([])
    const [pokemonName, setPokemonName] = useState('')

    const handleSearchChange = e => {

        //let toStr = e.target.value;
        setPokemonName(e.target.value);
        console.log(pokemonName);
    }

    useEffect(async () => {
        const result = await axios(
            'https://pokeapi.co/api/v2/pokemon?limit=804',
        );
        setPokename(result.data.results.map(p => p.name));
      }, []);

    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=804').then(res =>{
    //     setPokename(res.data.results.map(p => p.name))
    // })

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img src='images/pokelogo.png' alt='master' id='pokelogo'/>  
                    </Typography>
                    <div className={classes.search}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={pokename}
                            getOptionLabel={(pokename) => pokename}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Pokemon name..." variant="outlined" onChange={handleSearchChange} />}
                        />
                    </div>  
                    <img src='images/pokeball.png' alt='master' id='pokeball'/>  
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SearchBar;