import axios from "axios";
import { createContext, useEffect, useState } from "react"
export const DatosPokemon = createContext();

export const DatosPokemonContextProvider = ({children}) => {
    const [typePokemon, setTypePokemon] = useState([]);

    
    const getAllPokemon = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then((response) => {
          console.log(response);
          setTypePokemon(response.data.count);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getAllPokemon();
    }, []);

  return (
    <DatosPokemon.Provider value={typePokemon}>
        {children}
    </DatosPokemon.Provider>    
  )
}
