import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput (parseInt(input + 1));
    setPagina (parseInt(pagina + 1));
  }

  const previousPage = () => {
    setInput (parseInt(input - 1));
    setPagina (parseInt(pagina - 1));
  }
  
  const onKeyDown = e => {
      if(e.keyCode == 13) {
        setPagina(parseInt(e.target.value));
        if(
          parseInt(e.target.value < 1) || 
          parseInt(e.target.value) > Math.ceil(maximo) || 
          isNaN(parseInt(e.target.value))
          ){
            setPagina(1);
            setInput(1);
          }else {
            setPagina(parseInt(e.target.value));
          }
      }
  }
  
  const onChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex align-items-center gap-2">
        <button 
        disabled={pagina===1 || pagina < 1}
        className="btn btn-light"
        onClick={previousPage}
        >
          <BsFillArrowLeftCircleFill size={30} />{" "}
        </button>
        <div class="form-group d-flex align-items-center">
          <input
            onChange={e => onChange(e)}
            onKeyDown={e => onKeyDown(e)}
            value={input}
            className="form-control rounded"
            name="page"
            autoComplete="off"
            style={{ width: "50px" }}
          />
          <label for="de">de {maximo}</label>
        </div>
        <button 
        disabled={pagina=== Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        className="btn btn-light"
        onClick={nextPage}
        >
          <BsFillArrowRightCircleFill size={30} />{" "}
        </button>
      </div>
    </div>
  );
};
