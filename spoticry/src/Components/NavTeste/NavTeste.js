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
  Teste,
  MenuItem,
  Footer,
  Detail2,
} from "../Style/StyledNavTeste";

export function NavTeste() {
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
        <FotoUser src={fotoUsuario} alt="Foto perfil" />
        <Usuario>{user}</Usuario>
        <Detail />
      </UserInfo>
      <Teste>
        <img src={casa} alt="Icone casa" />
        <MenuItem onClick={goHome}>Home</MenuItem>
      </Teste>
      <Teste>
        <img src={musica} alt="Icone musica" />
        <MenuItem onClick={goMusics}>Minhas Músicas</MenuItem>
      </Teste>
      <Footer>
        <div>
          <img src={logo} alt="icone log" />
        </div>

        <Detail2 />
        <p>DESENVOLVIDO POR “JUNIN E SEUS PARCEIROS”</p>
      </Footer>
    </BarraLateral>
  );
}
