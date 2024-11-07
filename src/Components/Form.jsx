import { useState } from "react";
import Card from "./Card";
import { pinguinos } from "../pinguinos";

const Form = ({ tipo }) => {
  //Variables useState
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const pinguinoSeleccionado = pinguinos.find((pinguino) => pinguino.tipo === tipo);
  const imagenPinguino = pinguinoSeleccionado ? pinguinoSeleccionado.img : "";

  //Validaciones
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      usuario.nombre.trim() !== "" &&
      usuario.nombre.length > 2 &&
      usuario.apellido.length > 5
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {mostrar ? (
        <Card tipo={tipo} nombre={usuario.nombre} imagen={imagenPinguino} />
      ) : (
        <form onSubmit={handleSubmit}>
          {/* onsubmit */}
          <label>Nombre:</label>
          {/* onchange */}
          <input
            type="text"
            onChange={(event) =>
              setUsuario({ ...usuario, nombre: event.target.value })
            }
          />
          <label>Apellido:</label>
          <input
            type="text"
            onChange={(event) =>
              setUsuario({ ...usuario, apellido: event.target.value })
            }
          />
          <button>Pingüino favorito</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta.
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
