import React from "react";
import { AccordionItem } from "./AccordionItem";
import { geografia } from "../data";

export const Accordion = () => {
  return (
    <>
      <div>
        {/*Recorremos el mapa con las preguntas y respuestas que recogemos de data.js*/}
        {geografia.map((objeto, posicion) => (
          <AccordionItem key={posicion} posicion={posicion} objeto={objeto} />
        ))}
      </div>
    </>
  );
};
