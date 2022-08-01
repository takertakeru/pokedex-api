import React from "react";

export default function PokemonCard({ pokemon, loading, infoPokemon }) {
  return (
    <React.Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div
              className="pokemon-card"
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <h2 className="heading-secondary">{item.id}</h2>
              <img src={item.sprites.front_default} alt=""></img>
              <h1 className="heading-primary">{item.name.toUpperCase()}</h1>
              <div className="btn-card">
                <button className="btn-update">Update</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
}
