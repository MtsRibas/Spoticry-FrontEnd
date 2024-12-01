import React from "react";
import detalheModal from "../../assets/Icons/btnIcon.svg";
import {
  ModalWrapper,
  ModalContent,
  TituloModal,
  BotaoFechar,
  Form,
  Separacao,
  Input,
  BotaoEnviar,
} from "../Style/StyledEditarMusicaModal";

export function EditarMusicaModal({
  aberto,
  fechado,
  editSongData,
  setEditSongData,
  updateSong,
}) {
  return (
    <ModalWrapper aberto={aberto}>
      <ModalContent>
        <BotaoFechar onClick={fechado}>X</BotaoFechar>
        <TituloModal>
          <img src={detalheModal} alt="Icone músicas" />
          <h2>Editar Música</h2>
        </TituloModal>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Separacao>
            <label>Título</label>
            <Input
              type="text"
              value={editSongData.title}
              onChange={(e) =>
                setEditSongData({
                  ...editSongData,
                  title: e.target.value,
                })
              }
              placeholder="Novo Título da Música"
            />
          </Separacao>
          <Separacao>
            <label>Artista</label>
            <Input
              type="text"
              value={editSongData.artist}
              onChange={(e) =>
                setEditSongData({
                  ...editSongData,
                  artist: e.target.value,
                })
              }
              placeholder="Novo Artista"
            />
          </Separacao>
          <BotaoEnviar onClick={updateSong}>Salvar Alterações</BotaoEnviar>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
}