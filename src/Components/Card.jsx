import React from "react";

const Card = ({ nombre, tipo, imagen }) => {
  return (
    <div className="card">
      <h3>Hola, {nombre}!</h3>
      <h3>Sabemos que tu pingüino favorito de la lista es {tipo}.</h3>
      <img className="img-pinguino" src={imagen} />
    </div>
  );
};

export default Card;
