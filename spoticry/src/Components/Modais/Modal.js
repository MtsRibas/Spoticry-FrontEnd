import React from "react";
import { Aberto, Conteudo, BotaoFechar } from "../Style/SltyledModal";

export function Modal({ aberto, fechado, conteudoModal }) {
  if (!aberto) return null;

  return (
    <Aberto>
      <Conteudo>
        <BotaoFechar aria-label="Fechar Modal" onClick={fechado}>
          X
        </BotaoFechar>
        {conteudoModal}
      </Conteudo>
    </Aberto>
  );
}
