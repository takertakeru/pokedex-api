import { GridItem } from "@chakra-ui/react";
import React from "react";

export default function PokemonInfo({ data }) {
  return (
    <React.Fragment>
      {!data ? (
        ""
      ) : (
        <div className="pokemon-info">
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png `}
            alt=""
          />
          <div className="pokemon-ability">
            <div className="pokemon-power">
              {data.abilities.map((pokemon) => {
                return (
                  <div className="pokemon-power">
                    <h2>{pokemon.ability.name}</h2>
                  </div>
                );
              })}
            </div>
            <div className="pokemon-stat" key={data.id}>
              {data.stats.map((pokemon) => {
                return (
                  <div>
                    <h3>
                      {pokemon.stat.name}:{pokemon.base_stat}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
