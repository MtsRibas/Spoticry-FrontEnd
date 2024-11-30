import React from "react";
import Logo from "../../assets/Icons/SPOT..svg";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToMusics, goToPlaylists } from "../Rotas/Cordinator";
import {
  Menu,
  Juncao,
  Nav,
  BotoesMenu,
  BotaoSair,
} from "../Style/StyledHeader";

export function HeaderLogado() {
  const navigate = useNavigate();

  const sair = () => {
    localStorage.removeItem("authenticacao");
    navigate("/login");
  };

  const goHome = () => {
    goToHomePage(navigate);
  };

  const goPlaylists = () => {
    goToPlaylists(navigate);
  };

  const goMusics = () => {
    goToMusics(navigate);
  };

  return (
    <div>
      <Menu>
        <Juncao>
          <img src={Logo} alt="logo" />
          <Nav>
            <li>
              <BotoesMenu onClick={goHome}>Home</BotoesMenu>
            </li>
            <li>
              <BotoesMenu onClick={goPlaylists}>Playlist</BotoesMenu>
            </li>
            <li>
              <BotoesMenu onClick={goMusics}>Minhas Músicas</BotoesMenu>
            </li>
          </Nav>
        </Juncao>
        <BotaoSair onClick={sair}>Logout</BotaoSair>
      </Menu>
    </div>
  );
}
