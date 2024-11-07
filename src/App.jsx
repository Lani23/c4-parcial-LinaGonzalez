import { useState } from "react";
import "./App.css";
import Pinguino from "./Components/Pinguino";
import { pinguinos } from "./pinguinos";
import Form from "./Components/Form";

function App() {
  const [isSelected, setIsSelected] = useState({
    tipo: null,
    status: false,
  });

  return (
    <div>
      {isSelected.status ? <Form tipo={isSelected.tipo} /> : null}
      <div className="app-grid">
        {pinguinos.map((pinguino) => (
          <Pinguino
            key={pinguino.id}
            setIsSelected={setIsSelected}
            pinguino={pinguino}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
