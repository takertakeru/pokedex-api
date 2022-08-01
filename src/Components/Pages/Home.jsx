import React, { useState, useEffect } from "react";
import PokemonCard from "../molecules/PokemonCard";
import PokemonInfo from "../molecules/PokemonInfo";
import Header from "../atoms/Header";
import axios from "axios";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokemonStats, setPokemonStats] = useState();

  const getResult = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const pokemonLoad = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getResult(res.data.results);
    setLoading(false);
  };

  useEffect(() => {
    pokemonLoad();
  }, [url]);

  return (
    <React.Fragment>
      <Header />
      <div className="pokemon-container">
        {/* <h2>{pokemonData.length} Pokemons</h2> */}
        <div className="pokemon-status">
          <PokemonInfo data={pokemonStats} />
        </div>
        <div className="pokemons">
          <PokemonCard
            pokemon={pokemonData}
            loading={loading}
            infoPokemon={(pokemon) => setPokemonStats(pokemon)}
          />
          <div className="pokemon-btn">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            <button
              onClick={() => {
                setPokemonData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
