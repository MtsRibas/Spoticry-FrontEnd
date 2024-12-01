import React, { useState, useEffect } from "react";
import { HeaderLogado } from "../../Components/HeaderLogado/HeaderLogado";
import axios from "axios";
import foguinho from "../../assets/Icons/fireIcon.svg";
import { NavLateral } from "../../Components/NavLateral/NavLateral";
import { useNavigate } from "react-router-dom";
import fotoBanner from "../../assets/ritmada-do-zelda-saturada.png";
import {
  DivBanner,
  Banner,
  ImagemBanner,
  DivNomeBotao,
  TituloMusic,
  Botao,
  PlaylistTudo,
  TituloPlaylists,
  Ajustes,
  BotaoContainer,
  Botao1,
  DivPlaylists,
  CardPlaylist,
  Fotinha,
  Imagem,
  PlaylistTudo2,
} from "../../Components/Style/StyledHome";
export function Home() {
  const [playlistsEmAlta, setPlaylistsEmAlta] = useState([]);
  const [playlistsUltimasMusicas, setPlaylistsUltimasMusicas] = useState([]);
  const [popularSong, setPopularSong] = useState(null);
  const [paginaAtualEmAlta, setPaginaAtualEmAlta] = useState(1);
  const [paginaAtualUltimasMusicas, setPaginaAtualUltimasMusicas] = useState(1);
  const navigate = useNavigate();

  const playlistPorPaginaEmAlta = 4;
  const playlistPorPaginaUltimasMusicas = 4;
  const totalPaginasEmAlta = 5;
  const totalPaginasUltimasMusicas = 4;

  useEffect(() => {
    const token = localStorage.getItem("authenticacao");
    const idMusic = "5e7be831-88f1-4d96-8746-c2bb56603755";

    if (token) {
      Playlist(token);
      pop(token, idMusic);
    }
  }, []);

  const Playlist = async (token) => {
    try {
      const response = await axios.get(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const allPlaylists = response.data.playlists;

      setPlaylistsEmAlta(allPlaylists.slice(0, 20));
      setPlaylistsUltimasMusicas(allPlaylists.slice(21, 40));
    } catch (error) {
      console.log(error.response);
    }
  };
  const reproduzirMusica = "https://www.youtube.com/watch?v=mkmKZyAyliY";
  const pop = async (token, idMusic) => {
    try {
      const response = await axios.get(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${idMusic}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setPopularSong(response.data.song);
    } catch (error) {
      console.log("Erro ao buscar a música popular:", error.response);
    }
  };

  const goDetalhePlaylist = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  const proxPagEmAlta = () => {
    if (paginaAtualEmAlta < totalPaginasEmAlta) {
      setPaginaAtualEmAlta(paginaAtualEmAlta + 1);
    }
  };
  const pageAnteriorEmAlta = () => {
    if (paginaAtualEmAlta > 1) {
      setPaginaAtualEmAlta(paginaAtualEmAlta - 1);
    }
  };

  const proxPagUltimasMusicas = () => {
    if (paginaAtualUltimasMusicas < totalPaginasUltimasMusicas) {
      setPaginaAtualUltimasMusicas(paginaAtualUltimasMusicas + 1);
    }
  };
  const pageAnteriorUltimasMusicas = () => {
    if (paginaAtualUltimasMusicas > 1) {
      setPaginaAtualUltimasMusicas(paginaAtualUltimasMusicas - 1);
    }
  };

  return (
    <div>
      <HeaderLogado />
      <NavLateral playlist={playlistsEmAlta.concat(playlistsUltimasMusicas)} />
      <h1>
        <span>
          <img src={foguinho} alt="fogo" />
        </span>
        Música popular
      </h1>
      <DivBanner>
        <Banner>
          <ImagemBanner src={fotoBanner} alt="foto do banner" />
        </Banner>
        {popularSong && (
          <DivNomeBotao>
            <TituloMusic>{popularSong.title}</TituloMusic>
            <Botao
              href={reproduzirMusica}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reproduzir música popular"
            >
              Play
            </Botao>
          </DivNomeBotao>
        )}
      </DivBanner>

      <PlaylistTudo>
        <TituloPlaylists>
          <Ajustes>
            <img src={foguinho} alt="iconeFogo" />
            <h1>Em alta</h1>
          </Ajustes>
          <BotaoContainer>
            <Botao1
              onClick={pageAnteriorEmAlta}
              disabled={paginaAtualEmAlta === 1}
              aria-label="Página anterior de playlists em alta"
            >
              ←
            </Botao1>
            <p>
              {paginaAtualEmAlta} / {totalPaginasEmAlta}
            </p>
            <Botao1
              onClick={proxPagEmAlta}
              disabled={paginaAtualEmAlta >= totalPaginasEmAlta}
              aria-label="Próxima página de playlists em alta"
            >
              →
            </Botao1>
          </BotaoContainer>
        </TituloPlaylists>
        <DivPlaylists>
          {playlistsEmAlta
            .filter(
              (_, index) =>
                index >= (paginaAtualEmAlta - 1) * playlistPorPaginaEmAlta &&
                index < paginaAtualEmAlta * playlistPorPaginaEmAlta
            )
            .map((playlist) => (
              <CardPlaylist
                key={playlist._id}
                onClick={() => goDetalhePlaylist(playlist._id)}
                aria-label="Ir para detalhe das Playlists"
              >
                <Fotinha>
                  <Imagem
                    src="https://picsum.photos/200/300?random=1"
                    alt="Imagem card"
                  />
                </Fotinha>
                <h3>{playlist._name}</h3>
                <p>{playlist._description}</p>
              </CardPlaylist>
            ))}
        </DivPlaylists>
      </PlaylistTudo>

      <PlaylistTudo2>
        <TituloPlaylists>
          <Ajustes>
            <img src={foguinho} alt="iconeFogo" />
            <h1>Últimas músicas tocadas</h1>
          </Ajustes>
          <BotaoContainer>
            <Botao1
              onClick={pageAnteriorUltimasMusicas}
              disabled={paginaAtualUltimasMusicas === 1}
              aria-label="Página anterior de últimas músicas"
            >
              ←
            </Botao1>
            <p>
              {paginaAtualUltimasMusicas} / {totalPaginasUltimasMusicas}
            </p>
            <Botao1
              onClick={proxPagUltimasMusicas}
              disabled={paginaAtualUltimasMusicas >= totalPaginasUltimasMusicas}
              aria-label="Próxima página de últimas músicas"
            >
              →
            </Botao1>
          </BotaoContainer>
        </TituloPlaylists>
        <DivPlaylists>
          {playlistsUltimasMusicas
            .filter(
              (_, index) =>
                index >=
                  (paginaAtualUltimasMusicas - 1) *
                    playlistPorPaginaUltimasMusicas &&
                index <
                  paginaAtualUltimasMusicas * playlistPorPaginaUltimasMusicas
            )
            .map((playlist) => (
              <CardPlaylist
                key={playlist._id}
                onClick={() => goDetalhePlaylist(playlist._id)}
                aria-label="Ir para detalhe das Playlists"
              >
                <Fotinha>
                  <Imagem
                    src="https://picsum.photos/200/300?random=1"
                    alt="pokemon"
                  />
                </Fotinha>
                <h3>{playlist._name}</h3>
                <p>{playlist._description}</p>
              </CardPlaylist>
            ))}
        </DivPlaylists>
      </PlaylistTudo2>
    </div>
  );
}
