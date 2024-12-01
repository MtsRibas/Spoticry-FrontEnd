import React from "react";
import { Aberto, Conteudo, BotaoFechar } from "../Style/StyledModal";

export function Modal({ aberto, fechado, conteudoModal }) {
  if (!aberto) return null;

  return (
    <Aberto>
      <Conteudo>
        <BotaoFechar onClick={fechado}>X</BotaoFechar>
        {conteudoModal}
      </Conteudo>
    </Aberto>
  );
}