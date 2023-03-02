import React, { Component } from "react";
import pokeball from "../asset/pokeball-800x600-unscreen.gif";
import style from "./SearchForm.module.css";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: pokeball,
      height: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  fetchApi = async () => {
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.state.name}`
    );
    let data = await res.json();
    console.log(data);
    this.setState({
      img: data.sprites.front_default,
      height: data.height,
    });
  };

  handleSubmit = (e) => {
    this.fetchApi();
    e.preventDefault();
  };

  render() {
    return (
      <div className="container text-center">
        <div className={style.bg}>
          <div className="row">
            <div className="col-8">
              <div className="container d-flex justify-content-center">
                <div className="col-8">
                  <form className="" onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="pokemon"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={this.handleName}
                      />
                      <button
                        className="btn btn-outline-secondary mt-3"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <img src={this.state.img} style={{ height: "500px" }} />
            </div>
            <div className="col-4 d-flex align-items-center"></div>
          </div>

          <div></div>
        </div>
      </div>
    );
  }
}
