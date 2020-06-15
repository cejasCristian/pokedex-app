import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import PokeCard from './components/pokeCard/PokeCard';
import Footer from './components/footer/Footer';
import { fetchActions, getPokeDataActions } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  //get pokemon name list of API (only names)
  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=804');
      const data = result.data.results.map((p) => p.name);
      dispatch(fetchActions.setData(data));
    }
    fetchData();
  }, [dispatch]);

  //set value (pokemon name) from input (search bar component)
  const pokename = useSelector((state) => state.getName.name );
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
      const data = result.data;
      dispatch(getPokeDataActions.setPokeData(data));
    }
    fetchData();
  }, [dispatch, pokename]);
  
  return (
    <>
      <SearchBar />
      <PokeCard />
      <Footer />
    </>
  );
}

export default App;
