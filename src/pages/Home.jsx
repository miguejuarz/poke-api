import React from "react";
import img from '../asset/bg.jpg'
import img1 from '../asset/pokemons.jpg'

export const Home = () => {
  return (
      <div className="container text-center">
        <div className="row">
          <div className="col align-self-center">
            <img src={img} alt="" style={{height:"500px",borderRadius:"5px"}}/>
          </div>
        </div>
      </div>
  );
};
