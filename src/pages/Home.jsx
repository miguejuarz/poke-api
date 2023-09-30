import React from "react";
import img from "../asset/bg.jpg";
import img1 from "../asset/pokemons.jpg";
import types from "../asset/tipos.jpg"
import pikachu from "../asset/pikachu.gif"
import pokedex from "../asset/pokedex.jpg"

import { Link } from 'react-router-dom';

import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="row">
        <div className="col text-center">
        <Link to="types">
        <img
          className={styles.customImage}
            src={types}
            alt="Types"
            style={{ height: "300px"}}
          />
          </Link>
          </div>
        <div className="col text-center">
        <img
            src={pikachu}
            alt=""
            style={{ height: "300px"}}
          />
          </div>
        <div className="col text-center">
        <Link to="search">
        <img
            className={styles.customImage}
            src={pokedex}
            alt=""
            style={{ height: "300px", borderRadius: "5px" }}
          />
        </Link>
        </div>
      </div>
      
    </div>
  );
};
