import React, { useState, useEffect, useCallback } from "react";
import { HeaderLogado } from "../../Components/HeaderLogado/HeaderLogado";
import adicionar from "../../assets/Icons/adicionar.svg";
import foguinho from "../../assets/Icons/fireIcon.svg";
import MusicPlayer from "../../Components/MusicPlayer/MusicPlayer";
import { NavLateral } from "../../Components/NavLateral/NavLateral";
import editar from "../../assets/Icons/editar.svg";
import gifCarregando from "../../assets/spot.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditarMusicaModal } from "../../Components/Modais/EditarMusicaModal";
import { AdicionarMusicaModal } from "../../Components/Modais/AdicionarMusicaModal";
import { useNavigate } from "react-router-dom";
import playVazia from "../../assets/avisoMusica.png";
import {
  BotoesPaginacao,
  Tudo,
  ConteudoPrincipal,
  ContainerCarregando,
  ImagemCarregando,
  Titulo,
  BotaoAdicionar,
  FiltroContainer,
  FiltroButton,
  PaginacaoFiltro,
  SelectFiltro,
  Lista,
  ListItens,
  TituloMusicas,
  Botoes,
  BotaoReproduzir,
  BotaoEditar,
  BotaoDeletar,
  PlaylistVazia,
  PlayerWrapper,
} from "../../Components/Style/StyledMusicUser";
import {
  fetchAllSongs,
  addSong,
  updateSong,
  deleteSong,
} from "../../Components/Requisicoes/Reqs";

export function MusicUser() {
  const [musicas, setMusicas] = useState([]);
  const [filteredMusicas, setFilteredMusicas] = useState([]);
  const [modalMusicOpen, setModalMusicOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editSongData, setEditSongData] = useState({
    id: "",
    title: "",
    artist: "",
    userId: "",
  });
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [filtro] = useState("title");
  const [order, setOrder] = useState("asc");
  const [currentUrl, setCurrentUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const [showUserSongs, setShowUserSongs] = useState(false);
  const token = localStorage.getItem("authenticacao");

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const buscarTodasMusicas = useCallback(async () => {
    setLoading(true);
    try {
      const songs = await fetchAllSongs(token);
      if (songs) {
        setMusicas(songs);
        setFilteredMusicas(songs);
      } else {
        setMusicas([]);
        setFilteredMusicas([]);
      }
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  const filtrarPorUsuario = useCallback(() => {
    const userId = parseJwt(token)?.id;
    if (showUserSongs) {
      return musicas.filter((musica) => musica.userId === userId);
    }
    return musicas;
  }, [showUserSongs, musicas, token]);

  const sortMusicas = useCallback(
    (musicasList) => {
      return [...musicasList].sort((a, b) => {
        const field = filtro === "artist" ? "artist" : "title";
        return order === "asc"
          ? (a[field] || "").localeCompare(b[field] || "")
          : (b[field] || "").localeCompare(a[field] || "");
      });
    },
    [filtro, order]
  );

  useEffect(() => {
    buscarTodasMusicas();
  }, [buscarTodasMusicas]);

  useEffect(() => {
    const filtered = filtrarPorUsuario();
    setFilteredMusicas(sortMusicas(filtered));
  }, [musicas, filtro, order, showUserSongs, sortMusicas, filtrarPorUsuario]);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredMusicas(sortMusicas(musicas));
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = musicas.filter(
      (musica) =>
        musica.title.toLowerCase().includes(lowerQuery) ||
        musica.artist.toLowerCase().includes(lowerQuery)
    );
    setFilteredMusicas(sortMusicas(filtered));
  };

  const paginatedMusicas = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredMusicas.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(filteredMusicas.length / itemsPerPage);

  const saveSong = async () => {
    if (!songTitle.trim() || !artist.trim() || !url.trim()) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }
    const songData = { title: songTitle, artist: artist, url: url };

    try {
      await addSong(token, songData);
      buscarTodasMusicas();
      setSongTitle("");
      setArtist("");
      setUrl("");
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = (musica) => {
    const userId = parseJwt(token).id;
    if (musica.userId !== userId) {
      toast.error("Você não tem permissão para editar esta música.");
      return;
    }

    setEditSongData({
      id: musica.id,
      title: musica.title,
      artist: musica.artist,
      userId: musica.userId,
    });
    setEditModalOpen(true);
  };

  const handleUpdateSong = async () => {
    try {
      await updateSong(token, editSongData.id, {
        title: editSongData.title,
        artist: editSongData.artist,
      });
      buscarTodasMusicas();
    } catch (error) {
      console.error(error);
    }
  };

  const deletarMusica = async (musicaId) => {
    try {
      await deleteSong(token, musicaId);
      buscarTodasMusicas();
    } catch (error) {
      console.error(error);
    }
  };

  const PaginationControls = () => (
    <div>
      <BotoesPaginacao
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Anterior
      </BotoesPaginacao>
      <span>
        {currentPage}/{totalPages}
      </span>
      <BotoesPaginacao
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Próxima
      </BotoesPaginacao>
    </div>
  );

  return (
    <Tudo>
      <NavLateral />
      <ConteudoPrincipal>
        <HeaderLogado onSearch={handleSearch} />
        {loading ? (
          <ContainerCarregando>
            <ImagemCarregando src={gifCarregando} alt="Carregando músicas" />
          </ContainerCarregando>
        ) : (
          <>
            <Titulo>
              <h1>
                <span>
                  <img src={foguinho} alt="Ícone de fogo" />
                </span>
                Minhas Músicas
              </h1>
              <BotaoAdicionar
                onClick={() => setModalMusicOpen(true)}
                aria-label="Adicionar nova música"
              >
                <img src={adicionar} alt="Adicionar Música" />
              </BotaoAdicionar>
            </Titulo>
            <FiltroContainer>
              <FiltroButton onClick={() => setShowUserSongs(false)}>
                Todas as Músicas
              </FiltroButton>
              <FiltroButton onClick={() => setShowUserSongs(true)}>
                Minhas Músicas
              </FiltroButton>
            </FiltroContainer>

            <PaginacaoFiltro>
              <FiltroContainer>
                <SelectFiltro
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  aria-label="Ordenar músicas"
                >
                  <option value="asc">Nome Música A-Z</option>
                  <option value="desc">Nome Música Z-A</option>
                </SelectFiltro>
              </FiltroContainer>
              <PaginationControls />
            </PaginacaoFiltro>

            <div>
              {paginatedMusicas().length > 0 ? (
                <Lista>
                  {paginatedMusicas().map((musica) => (
                    <ListItens key={musica.id}>
                      <TituloMusicas
                        onClick={() => navigate(`/musica/${musica.id}`)}
                        aria-label=" Ir para Detalhes da música"
                      >
                        <h4>{musica.title}</h4>
                        <p>Artista: {musica.artist}</p>
                      </TituloMusicas>
                      <Botoes>
                        <BotaoReproduzir
                          onClick={() => setCurrentUrl(musica.url)}
                          aria-label="Reproduzir música"
                        >
                          Reproduzir
                        </BotaoReproduzir>
                        {musica.userId === parseJwt(token)?.id && (
                          <>
                            <BotaoEditar
                              onClick={() => openEditModal(musica)}
                              aria-label="Editar música"
                            >
                              <img src={editar} alt="Ícone editar" />
                            </BotaoEditar>
                            <BotaoDeletar
                              onClick={() => deletarMusica(musica.id)}
                              aria-label="deletar música"
                            >
                              X
                            </BotaoDeletar>
                          </>
                        )}
                      </Botoes>
                    </ListItens>
                  ))}
                </Lista>
              ) : (
                <PlaylistVazia>
                  <img src={playVazia} alt="Playlist vazia" />
                </PlaylistVazia>
              )}
            </div>
          </>
        )}
      </ConteudoPrincipal>
      <PlayerWrapper>
        <MusicPlayer
          url={currentUrl}
          playing={playing}
          setPlaying={setPlaying}
        />
      </PlayerWrapper>
      <AdicionarMusicaModal
        aberto={modalMusicOpen}
        fechado={() => setModalMusicOpen(false)}
        songTitle={songTitle}
        setSongTitle={setSongTitle}
        artist={artist}
        setArtist={setArtist}
        url={url}
        setUrl={setUrl}
        saveSong={saveSong}
      />
      <EditarMusicaModal
        aberto={editModalOpen}
        fechado={() => setEditModalOpen(false)}
        editSongData={editSongData}
        setEditSongData={setEditSongData}
        updateSong={handleUpdateSong}
      />
      <ToastContainer />
    </Tudo>
  );
}
