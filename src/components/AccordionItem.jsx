import React from "react";
import { useState } from "react";

export const AccordionItem = ({ objeto, posicion }) => {
  //Declaramos el Hook y le damos un estado
  const [clickado, setClickado] = useState(false);

  //Funcion que nos permitira abrir y cerrar el menu
  //Consta de un mecanismo a traves de un True y False
  const abrirMenu = () => {
    setClickado(!clickado);
  };

  return (
    <>
      <ul>
        {/**Cambios de estilos de css segun el estado */}
        <li className={clickado ? "accordion_item active" : "accordion_item"}>
          {/**Tras ser "clickado" cambiara el estado que le hemos puesto por defecto en este caso False */}
          <button className="button" onClick={abrirMenu}>
            {objeto.pregunta}
            <p className="control">{!clickado ? "+" : "-"}</p>
          </button>
          <div className={clickado ? "answer_wrapper open" : "answer_wrapper"}>
            <p className="answer">{objeto.respuesta}</p>
          </div>
        </li>
      </ul>
    </>
  );
};
