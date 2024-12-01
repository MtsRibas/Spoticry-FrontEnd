import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchPlaylistById,
  fetchSongsFromPlaylist,
  fetchSongDetailsById,
  fetchAllSongs,
  addSongToPlaylist,
  removeSongFromPlaylist,
} from "../../Components/Requisicoes/Reqs";
import adicionarMusica from "../../assets/Icons/adicionar.svg";
import { HeaderLogado } from "../../Components/HeaderLogado/HeaderLogado";
import { NavTeste } from "../../Components/NavTeste/NavTeste";
import ModalMusicPlaylist from "../../Components/Modais/ModalMusicPlaylist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gifSpot from "../../assets/spot.gif";
import {
  Content,
  Tudo,
  LoadingContainer,
  ImagemCarregando,
  DivTitulo,
  Titulo,
  BotaoAdicionar,
  Paginacao,
  BotaoPaginacao,
  Lista,
  ListItens,
  DivDadosMusica,
  BotaoExcluir,
} from "../../Components/Style/StyledDetalhePlaylist";

export function DetalhePlaylist() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [songDetails, setSongDetails] = useState({});
  const [allSongs, setAllSongs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const { playlistId } = useParams();
  const token = localStorage.getItem("authenticacao");
  const navigate = useNavigate();

  const playlistPorId = useCallback(async () => {
    try {
      const playlistData = await fetchPlaylistById(playlistId, token);
      setPlaylist(playlistData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [playlistId, token]);

  const fetchPlaylistSongs = useCallback(async () => {
    try {
      const songIds = await fetchSongsFromPlaylist(playlistId, token);
      setSongs(songIds);

      const details = {};
      for (const id of songIds) {
        const songData = await fetchSongDetailsById(id, token);
        details[id] = songData;
      }
      setSongDetails(details);
    } catch (err) {
      console.error(err);
    }
  }, [playlistId, token]);

  const loadAllSongs = useCallback(async () => {
    try {
      const allAvailableSongs = await fetchAllSongs(token);
      setAllSongs(allAvailableSongs);
    } catch (err) {
      console.error(err);
    }
  }, [token]);

  const handleAddSongToPlaylist = async (songId) => {
    try {
      await addSongToPlaylist(playlistId, songId, token);
      fetchPlaylistSongs();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveSongFromPlaylist = async (songId) => {
    try {
      await removeSongFromPlaylist(playlistId, songId, token);
      setSongs((prevSongs) => prevSongs.filter((id) => id !== songId));
    } catch (err) {
      console.error(err);
    }
  };

  const paginatedSongs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return songs.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(songs.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    if (playlistId) {
      playlistPorId();
      fetchPlaylistSongs();
      loadAllSongs();
    }
  }, [playlistId, playlistPorId, fetchPlaylistSongs, loadAllSongs]);

  const handleMusicClick = (musicaId) => {
    navigate(`/musica/${musicaId}`);
  };

  return (
    <Tudo>
      <NavTeste />
      <HeaderLogado />
      <Content>
        {loading ? (
          <LoadingContainer>
            <ImagemCarregando src={gifSpot} alt="Carregando" />
          </LoadingContainer>
        ) : (
          <>
            <DivTitulo>
              <Titulo>{playlist?._name}</Titulo>
              <BotaoAdicionar onClick={() => setModalOpen(true)}>
                <img src={adicionarMusica} alt="Adicionar Música" />
              </BotaoAdicionar>
            </DivTitulo>

            <h2>Músicas</h2>
            <Paginacao>
              <BotaoPaginacao onClick={prevPage} disabled={currentPage === 1}>
                Anterior
              </BotaoPaginacao>
              <span>
                {currentPage}/{totalPages}
              </span>
              <BotaoPaginacao
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Próximo
              </BotaoPaginacao>
            </Paginacao>
            {songs.length > 0 ? (
              <Lista>
                {paginatedSongs().map((songId) => (
                  <ListItens key={songId}>
                    <DivDadosMusica onClick={() => handleMusicClick(songId)}>
                      <strong>Música:</strong>{" "}
                      {songDetails[songId]?.title || "Carregando..."}
                      <br />
                      <strong>Artista:</strong>{" "}
                      {songDetails[songId]?.artist || "Carregando..."}
                    </DivDadosMusica>
                    <BotaoExcluir
                      onClick={() => handleRemoveSongFromPlaylist(songId)}
                    >
                      X
                    </BotaoExcluir>
                  </ListItens>
                ))}
              </Lista>
            ) : (
              <p>Nenhuma música encontrada na playlist.</p>
            )}

            {modalOpen && (
              <ModalMusicPlaylist
                allSongs={allSongs}
                itemsPerPage={itemsPerPage}
                addSongToPlaylist={handleAddSongToPlaylist}
                closeModal={() => setModalOpen(false)}
              />
            )}
          </>
        )}
      </Content>
      <ToastContainer />
    </Tudo>
  );
}
