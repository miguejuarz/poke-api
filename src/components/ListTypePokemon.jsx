import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardTypePokemon } from "./CardTypePokemon";
import { Pagination } from "./Pagination";

export const ListTypePokemon = () => {
  const [typePokemon, setTypePokemon] = useState([]);

  //paginacion
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(20);

  const maximo = Math.ceil(typePokemon.length / porPagina);

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
            {typePokemon
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((pokemon, id) => (
                <CardTypePokemon key={id} pokemon={pokemon.pokemon} />
              ))}
          </div>
        </div>
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  );
};
