import React from "react";
import { typesItems } from "../utils/TypesItems";
import { Link } from "react-router-dom";

export const Types = () => {
  console.log(typesItems);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col align-self-center">
          <div className="d-flex flex-wrap">
            {typesItems.map((types) => (
              <div key={types.id}>
                <Link to={types.path}>
                  <img src={types.imgpath} style={{ height: "180px"}} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
