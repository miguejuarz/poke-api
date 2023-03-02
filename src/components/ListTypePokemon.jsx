import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardTypePokemon } from "./CardTypePokemon";

export const ListTypePokemon = () => {
  const [typePokemon, setTypePokemon] = useState([]);

  const { type } = useParams();
  const getPokemonByType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then((response) => {
        setTypePokemon(response.data.pokemon);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemonByType();
  }, [type]);

  return (
    <div className="container text-center p-0">
      <div className="row">
        <div className="col align-self-center">
      <div className="d-flex flex-wrap">
        {typePokemon.map((pokemon, id) => (
          <CardTypePokemon key={id} pokemon={pokemon.pokemon} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};
