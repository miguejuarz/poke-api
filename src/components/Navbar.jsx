import React, { useContext } from 'react'
import {SiPokemon} from 'react-icons/si';
import {CgPokemon} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { DatosPokemon } from '../contexts/DatosPokemonContextProvider';


export const Navbar = () => {
  const TotalPokemon = useContext(DatosPokemon);
  console.log(TotalPokemon);
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/" ><SiPokemon size={80} /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <CgPokemon style={{position:"fixed"}}/> */}
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="types" className="nav-link" href="#">Types</Link>
        </li>
        <li className="nav-item">
          <Link to="search" className="nav-link" href="#">Search</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"> N° Pokemons <strong>{TotalPokemon}</strong></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
