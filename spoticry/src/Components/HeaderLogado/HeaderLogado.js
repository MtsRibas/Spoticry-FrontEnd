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
          <img
            src={Logo}
            alt="logo"
            onClick={goHome}
            aria-label="Ir para a página inicial"
          />
          <Nav>
            <li>
              <BotoesMenu
                onClick={goHome}
                aria-label="Ir para a página inicial"
              >
                Home
              </BotoesMenu>
            </li>
            <li>
              <BotoesMenu
                onClick={goPlaylists}
                aria-label="Ir para a página de playlist"
              >
                Playlist
              </BotoesMenu>
            </li>
            <li>
              <BotoesMenu
                onClick={goMusics}
                aria-label="Ir para a página de músicas"
              >
                Minhas Músicas
              </BotoesMenu>
            </li>
          </Nav>
        </Juncao>
        <BotaoSair onClick={sair} aria-label="Sair da conta">
          Logout
        </BotaoSair>
      </Menu>
    </div>
  );
}
