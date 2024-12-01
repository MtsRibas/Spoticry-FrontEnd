import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import voltar from "../../assets/Icons/VoltarMusica.svg";
import avancar from "../../assets/Icons/avancarMusica.svg";
import pausar from "../../assets/Icons/pausar.svg";
import play from "../../assets/Icons/play.svg";

import {
  PlayerContainer,
  ControleContainer,
  BotaoControle,
} from "../Style/StyledMusicPlayer";
const MusicPlayer = ({ url, playing, setPlaying }) => {
  const playerRef = useRef(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const skipForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playedSeconds + 10, "seconds");
    }
  };

  const skipBackward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(Math.max(playedSeconds - 10, 0), "seconds");
    }
  };

  return (
    <PlayerContainer>
      <h3>Musica</h3>
      {url ? (
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          controls={false}
          width="100%"
          height="200px"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
        />
      ) : (
        <span />
      )}
      <div>
        Tempo: {Math.floor(playedSeconds / 60)}:
        {Math.floor(playedSeconds % 60)
          .toString()
          .padStart(2, "0")}
      </div>

      <ControleContainer>
        <BotaoControle onClick={skipBackward}>
          <img src={voltar} alt="icone voltar" />
        </BotaoControle>
        <BotaoControle onClick={() => setPlaying(!playing)}>
          {playing ? (
            <img src={pausar} alt="icone pausar" />
          ) : (
            <img src={play} alt="icone iniciar musica" />
          )}
        </BotaoControle>
        <BotaoControle onClick={skipForward}>
          <img src={avancar} alt="icone avancar" />
        </BotaoControle>
      </ControleContainer>
    </PlayerContainer>
  );
};

export default MusicPlayer;