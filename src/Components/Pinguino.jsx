import React from "react";

const Pinguino = ({ pinguino, setIsSelected }) => {
  return (
    <div className="pinguino-card">
      <div className="pinguino-content">
        <img
          src={pinguino.img}
          alt={pinguino.tipo}
          className="pinguino-image"
        />
        <div className="pinguino-info">
          <h3>{pinguino.tipo}</h3>
          <h4>{pinguino.cientifico}</h4>
        </div>
      </div>
      <button
        onClick={() => setIsSelected({ tipo: pinguino.tipo, status: true })}
        className="pinguino-button"
      >
        Me gusta este tipo de pingüino!
      </button>
    </div>
  );
};

export default Pinguino;
