import React from "react";
import detalheModal from "../../assets/Icons/btnIcon.svg";
import {
  ModalWrapper,
  ModalContent,
  TituloModal,
  Form,
  Separacao,
  Input,
  BotaoEnviar,
  BotaoFechar,
} from "../Style/StyledAdicionarMusicaModal";

export function AdicionarMusicaModal({
  aberto,
  fechado,
  songTitle,
  setSongTitle,
  artist,
  setArtist,
  url,
  setUrl,
  saveSong,
}) {
  return (
    <ModalWrapper aberto={aberto}>
      <ModalContent>
        <BotaoFechar onClick={fechado} aria-label="Fechar modal">
          X
        </BotaoFechar>
        <TituloModal>
          <img src={detalheModal} alt="Icone músicas" />
          <h2>Adicionar Música</h2>
        </TituloModal>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Separacao>
            <label>Título</label>
            <Input
              type="text"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              placeholder="Título da Música"
            />
          </Separacao>
          <Separacao>
            <label>Artista</label>
            <Input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Artista"
            />
          </Separacao>
          <Separacao>
            <label>URL</label>
            <Input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="URL da Música"
            />
          </Separacao>
          <BotaoEnviar onClick={saveSong} aria-label="Salvar Musica">
            Salvar Música
          </BotaoEnviar>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
}
