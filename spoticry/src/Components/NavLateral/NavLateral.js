import React from "react";
import fotoUsuario from "../../assets/perfil.jpg";
import casa from "../../assets/Icons/casa.svg";
import musica from "../../assets/Icons/musica2.svg";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToMusics } from "../Rotas/Cordinator";
import logo from "../../assets/Icons/SPOT..svg";
import {
  BarraLateral,
  UserInfo,
  FotoUser,
  Usuario,
  Detail,
  Navegacao,
  MenuItem,
  Footer,
  Detail2,
} from "../Style/StyledNavLateral";

export function NavLateral() {
  const user = localStorage.getItem("email");
  const navigate = useNavigate();

  const goMusics = () => {
    goToMusics(navigate);
  };

  const goHome = () => {
    goToHomePage(navigate);
  };

  return (
    <BarraLateral>
      <UserInfo>
        <FotoUser src={fotoUsuario} alt="Foto de perfil do usuário" />
        <Usuario>{user}</Usuario>
        <Detail />
      </UserInfo>
      <Navegacao>
        <img
          src={casa}
          alt="Ícone de casa"
          aria-label="Ir para a página inicial"
        />
        <MenuItem onClick={goHome}>Home</MenuItem>
      </Navegacao>
      <Navegacao>
        <img
          src={musica}
          alt="Ícone de músicas"
          aria-label="Ir para minhas músicas"
        />
        <MenuItem onClick={goMusics}>Minhas Músicas</MenuItem>
      </Navegacao>
      <Footer>
        <div>
          <img src={logo} alt="Logo do aplicativo" />
        </div>
        <Detail2 />
        <p>DESENVOLVIDO POR “JUNIN E SEUS PARCEIROS”</p>
      </Footer>
    </BarraLateral>
  );
}
