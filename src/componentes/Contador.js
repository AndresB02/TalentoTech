import React, { useState } from "react";

export default function Contador(props) {
  const [numero, setNumero] = useState(0);
  const aumentar = () => {
    setNumero(numero + 1);
  };
  /*const disminuir = () => {
    setNumero(numero - 1);
  };*/
  return (
    <div>
      <button className="button" onClick={aumentar}>
        {Contador}
        {props.children} <h3>Visitas {numero}</h3>
      </button>
    </div>
  );
}
