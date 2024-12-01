import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeaderLogado } from "../../Components/HeaderLogado/HeaderLogado";
import { NavTeste } from "../../Components/NavTeste/NavTeste";
import voltar from "../../assets/Icons/VoltarMusica.svg";
import avancar from "../../assets/Icons/avancarMusica.svg";
import pausar from "../../assets/Icons/pausar.svg";
import play from "../../assets/Icons/play.svg";
import gifSpot from "../../assets/spot.gif";
import {
  Tudo,
  LoadingContainer,
  ImagemCarregando,
  PlayerContainer,
  Player,
  PlayerWrapper,
  DescricaoMusica,
  Titulo,
  NomeArtista,
  ControleContainer,
  BotaoControle,
} from "../../Components/Style/StyledDetalheMusica";
import { fetchSongDetails } from "../../Components/Requisicoes/Reqs";

export function DetalheMusica() {
  const { id } = useParams();
  const [musica, setMusica] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const playerRef = useRef(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  useEffect(() => {
    const loadSongDetails = async () => {
      const token = localStorage.getItem("authenticacao");
      if (!token) {
        toast.error("Token de autenticação não encontrado!");
        setLoading(false);
        return;
      }

      try {
        const songDetails = await fetchSongDetails(id, token);
        setMusica(songDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) loadSongDetails();
  }, [id]);

  const skipBackward = () => {
    if (playerRef.current) {
      const newTime = Math.max(playedSeconds - 10, 0);
      playerRef.current.seekTo(newTime, "seconds");
      setPlayedSeconds(newTime);
    }
  };

  const skipForward = () => {
    if (playerRef.current) {
      const newTime = playedSeconds + 10;
      playerRef.current.seekTo(newTime, "seconds");
      setPlayedSeconds(newTime);
    }
  };

  return (
    <Tudo>
      <HeaderLogado />
      <NavTeste />
      {loading ? (
        <LoadingContainer>
          <ImagemCarregando src={gifSpot} alt="Carregando" />
        </LoadingContainer>
      ) : (
        <PlayerContainer>
          <Player>
            <PlayerWrapper>
              <ReactPlayer
                ref={playerRef}
                url={musica?.url}
                playing={playing}
                controls={true}
                width="100%"
                height="100%"
                onProgress={({ playedSeconds }) => {
                  setPlayedSeconds(playedSeconds);
                }}
              />
            </PlayerWrapper>
          </Player>
          <DescricaoMusica>
            <Titulo>{musica?.title}</Titulo>
            <NomeArtista>
              <strong>Artista:</strong>
              <span>{musica?.artist}</span>
            </NomeArtista>
          </DescricaoMusica>
          <ControleContainer>
            <BotaoControle onClick={skipBackward}>
              <img src={voltar} alt="Voltar" />
            </BotaoControle>
            <BotaoControle onClick={() => setPlaying(!playing)}>
              {playing ? (
                <img src={pausar} alt="Pausar" />
              ) : (
                <img src={play} alt="Play" />
              )}
            </BotaoControle>
            <BotaoControle onClick={skipForward}>
              <img src={avancar} alt="Avançar" />
            </BotaoControle>
          </ControleContainer>
        </PlayerContainer>
      )}
      <ToastContainer />
    </Tudo>
  );
}
