import React, { useState } from "react";
import gif from "../../assets/spot.gif";
import {
  Modal,
  ModalMusic,
  DivFecharModal,
  BotaoFechar,
  Lista,
  ListItens,
  DivBotao,
  BotaoAdicionar,
  PaginationContainer,
  PaginationButton,
  DivImagem,
} from "../Style/StyledModalMusicPlaylist";

const ModalMusicPlaylist = ({
  allSongs,
  itemsPerPage = 10,
  addSongToPlaylist,
  closeModal,
}) => {
  const [modalCurrentPage, setModalCurrentPage] = useState(1);

  const totalPages = Math.ceil(allSongs.length / itemsPerPage);

  const paginatedSongs = () => {
    const startIndex = (modalCurrentPage - 1) * itemsPerPage;
    return allSongs.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <Modal>
      <ModalMusic>
        <DivFecharModal>
          <h3>Selecione uma música para adicionar</h3>
          <BotaoFechar onClick={closeModal}>X</BotaoFechar>
        </DivFecharModal>

        {allSongs && allSongs.length > 0 ? (
          <>
            <Lista>
              {paginatedSongs().map((song) => (
                <ListItens key={song.id}>
                  {song.title} {song.artist}
                  <DivBotao>
                    <BotaoAdicionar onClick={() => addSongToPlaylist(song.id)}>
                      Adicionar
                    </BotaoAdicionar>
                  </DivBotao>
                </ListItens>
              ))}
            </Lista>
            <PaginationContainer>
              <PaginationButton
                onClick={() =>
                  setModalCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={modalCurrentPage === 1}
              >
                Anterior
              </PaginationButton>
              <span>
                {modalCurrentPage}/{totalPages}
              </span>
              <PaginationButton
                onClick={() =>
                  setModalCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={modalCurrentPage === totalPages}
              >
                Próxima
              </PaginationButton>
            </PaginationContainer>
          </>
        ) : (
          <DivImagem>
            <img src={gif} alt="Carregando" />
          </DivImagem>
        )}
      </ModalMusic>
    </Modal>
  );
};

export default ModalMusicPlaylist;