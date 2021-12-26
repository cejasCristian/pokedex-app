import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import PokeCard from "./components/pokeCard/PokeCard";
import Footer from "./components/footer/Footer";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { fetchActions, getPokeDataActions } from "./redux/actions";
import PokeballAnimation from "./components/pokeballAnimation/PokeballAnimation";

function App() {
  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();

  //get pokemon name list from API (only names)
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=649");
      const data = result.data.results.map((p) => p.name);

      dispatch(fetchActions.setData(data));
    }
    trackPromise(fetchData());
  }, [dispatch]);

  //set value (pokemon name) from input (search bar component)
  const pokename = useSelector((state) => state.getName.name);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokename}`
      );

      const data = result.data;
      dispatch(getPokeDataActions.setPokeData(data));
    }
    trackPromise(fetchData());
  }, [dispatch, pokename]);

  return (
    <div className="hero">
      <SearchBar />
      {promiseInProgress !== true ? (
        <>
          {" "}
          <PokeCard />
        </>
      ) : (
        <PokeballAnimation />
      )}
      <Footer />
    </div>
  );
}

export default App;
