import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Icons/SPOT..svg";
import {
  Logo,
  Botao,
  Tudo,
  ContainerErro,
} from "../../Components/Style/StyledError";
import erroMensagem from "../../assets/Error.png";

export function Error() {
  const navigate = useNavigate();

  const onClickBotao = () => {
    navigate("/home");
  };

  return (
    <Tudo>
      <Logo>
        <img src={logo} alt="Logo" onClick={onClickBotao} />
      </Logo>
      <ContainerErro>
        <img src={erroMensagem} alt="Error" />
        <Botao onClick={onClickBotao} aria-label="Voltar para home">
          Voltar para a home
        </Botao>
      </ContainerErro>
    </Tudo>
  );
}
