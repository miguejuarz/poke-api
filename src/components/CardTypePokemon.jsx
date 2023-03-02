import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CardTypePokemon = ({pokemon}) => {
    const [onePokemon, setOnePokemon] = useState({
        name:"",
        sprites:{ front_default: ""}
    })

    const getPokemons = (url) => {
        axios.get(url).then((response)=>{
            setOnePokemon(response.data);
        });
    };

    useEffect(() => {
        getPokemons(pokemon.url);
    }, [])
    
    console.log(pokemon);
  return (
    <div className="card m-2 col-1" style={{ widows: "18rem",background:"#D3D3D3",borderColor:"yellow"}}>
    <img src={onePokemon.sprites.front_default} alt="" />
  <div className="card-title text-center">{onePokemon.name}</div>
  </div>

  )
}
