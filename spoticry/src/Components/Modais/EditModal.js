import React, { useState } from "react";
import { Modal } from "./Modal";
import { toast } from "react-toastify";
import { Form, Input, BotaoEnviar } from "../Style/StyledEditModal";
import { updatePlaylist } from "../Requisicoes/Reqs";

export function EditModal({ playlist, onClose, onUpdate }) {
  const [novoNome, setNovoNome] = useState(playlist.name || "");
  const [novaDescricao, setNovaDescricao] = useState(
    playlist.description || ""
  );

  const handleUpdate = async () => {
    if (!novoNome || !novaDescricao) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const token = localStorage.getItem("authenticacao");
    try {
      await updatePlaylist(
        playlist._id,
        { name: novoNome, description: novaDescricao },
        token
      );
      toast.success("Playlist atualizada com sucesso!");
      if (onUpdate) onUpdate();
      onClose();
    } catch (error) {
      console.error(
        "Erro ao atualizar playlist:",
        error.response || error.message
      );
      toast.error("Não foi possível atualizar a playlist.");
    }
  };

  return (
    <Modal
      aberto={true}
      fechado={onClose}
      conteudoModal={
        <>
          <h2 aria-label="Titulo Modal">Editar Playlist</h2>
          <Form onSubmit={(e) => e.preventDefault()}>
            <label>Editar Nome</label>
            <Input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              placeholder="Novo Nome da Playlist"
            />
            <label>Editar Descricao</label>
            <Input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
              placeholder="Nova descricao"
            />
            <BotaoEnviar
              type="button"
              onClick={handleUpdate}
              aria-label="Salvar Alterações"
            >
              Salvar Alterações
            </BotaoEnviar>
          </Form>
        </>
      }
    />
  );
}
