import React, { useState, useEffect } from "react";
import { HeaderLogado } from "../../Components/HeaderLogado/HeaderLogado";
import { Modal } from "../../Components/Modais/Modal";
import { EditModal } from "../../Components/Modais/EditModal";
import axios from "axios";
import { getTokenData } from "../../Services/getTokenData";
import foguinho from "../../assets/Icons/fireIcon.svg";
import adicionar from "../../assets/Icons/adicionar.svg";
import detalheModal from "../../assets/Icons/btnIcon.svg";
import { useNavigate } from "react-router-dom";
import editar from "../../assets/Icons/editar.svg";
import { NavLateral } from "../../Components/NavLateral/NavLateral";
import imagemCarregando from "../../assets/spot.gif";
import { toast, ToastContainer } from "react-toastify";
import playVazia from "../../assets/aviso.png";
import {
  Tudo,
  Titulo,
  BotaoAdicionar,
  ContainerCarregando,
  ImagemCarregando,
  FiltroContainer,
  FiltroButton,
  Input,
  SelectFiltro,
  ContainerPlaylist,
  PaginationButton,
  PaginationContainer,
  ListItens,
  ListaPlaylist,
  InfoTotal,
  InfoPlaylist,
  DivImagem,
  ImagemPlaylist,
  BotaoDeletar,
  Botoes,
  BotaoEditar,
  PlaylistVazia,
  TituloModal,
  Form,
  Separacao,
  BotaoEnviar,
} from "../../Components/Style/StyledPlaylistUser";

export function PlaylistUser() {
  const [novaPlaylist, setNovaPlaylist] = useState("");
  const [descricaoPlaylist, setDescricaoPlaylist] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [editingPlaylist, setEditingPlaylist] = useState(null);
  const [showUserPlaylists, setShowUserPlaylists] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [loading, setLoading] = useState(true);

  const ordenarPlaylists = (playlists) => {
    if (sortCriteria === "name-asc") {
      return [...playlists].sort((a, b) =>
        (a._name || "").localeCompare(b._name || "")
      );
    }
    if (sortCriteria === "name-desc") {
      return [...playlists].sort((a, b) =>
        (b._name || "").localeCompare(a._name || "")
      );
    }
    return playlists;
  };

  const filtrarEOrdenarPlaylists = () => {
    const token = localStorage.getItem("authenticacao");
    const userData = getTokenData(token);

    const filteredPlaylists = playlists.filter((playlist) => {
      const pertenceAoUsuario = userData && playlist._userId === userData.id;

      return (
        (showUserPlaylists ? pertenceAoUsuario : true) &&
        playlist._name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    return ordenarPlaylists(filteredPlaylists);
  };

  const navigate = useNavigate();

  const handlePlaylistClick = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  const buscarPlaylists = async (userId, token) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setPlaylists(response.data.playlists || []);
    } catch (error) {
      console.error("Erro ao buscar Playlists:", error.response);
      setPlaylists([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authenticacao");
    if (token) {
      const userData = getTokenData(token);
      if (userData && userData.id) {
        buscarPlaylists(userData.id, token);
      }
    }
  }, []);

  const CriarPlaylist = async (token) => {
    const userData = getTokenData(token);
    const userId = userData.id;

    if (!userId) {
      console.error("User ID nao encontrado.");
      return;
    }

    const body = {
      userId: userId,
      songs: [],
      description: descricaoPlaylist,
      name: novaPlaylist,
    };

    try {
      await axios.post(
        "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist",
        body,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setNovaPlaylist("");
      setDescricaoPlaylist("");
      setModalOpen(false);
      buscarPlaylists(userId, token);
      navigate("/playlists");
      toast.success("Playlist criada com sucesso!");
    } catch (error) {
      console.log("Erro ao criar playlist:", error.response);
      toast.error("Não foi possível criar a playlist!");
    }
  };

  const onClickOpenModal = () => {
    setModalOpen(true);
  };

  const onClickCreatePlaylist = () => {
    const token = localStorage.getItem("authenticacao");
    if (token) {
      CriarPlaylist(token);
    }
  };

  const deletarPlaylist = async (playlistId) => {
    const token = localStorage.getItem("authenticacao");
    const userData = getTokenData(token);
    const userId = userData.id;

    const playlist = playlists.find((pl) => pl._id === playlistId);
    if (playlist && playlist._userId === userId) {
      try {
        await axios.delete(
          `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        toast.success("Playlist deletada com sucesso!");
        buscarPlaylists(userId, token);
      } catch (error) {
        console.error("Erro ao deletar a playlist:", error.response);
      }
    } else {
      toast.error("Você não tem permissão para deletar esta playlist.");
    }
  };

  const abrirModalEdicao = (playlist) => {
    const token = localStorage.getItem("authenticacao");
    const userData = getTokenData(token);

    if (userData && userData.id === playlist._userId) {
      setEditingPlaylist(playlist);
    } else {
      toast.error("Você não tem permissão para editar esta playlist.");
    }
  };

  const paginatedPlaylists = () => {
    const filteredAndSortedPlaylists = filtrarEOrdenarPlaylists();
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedPlaylists.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  };

  const totalPages = Math.ceil(
    filtrarEOrdenarPlaylists().length / itemsPerPage
  );

  return (
    <Tudo>
      <NavLateral />
      <HeaderLogado />

      <Titulo>
        <h1>
          <span>
            <img src={foguinho} alt="icone de fogo" />
          </span>
          Playlists
        </h1>
        <BotaoAdicionar
          onClick={onClickOpenModal}
          aria-label="Adicionar nova playlist"
        >
          <img src={adicionar} alt="botao de adicionar" />
        </BotaoAdicionar>
      </Titulo>
      {loading ? (
        <ContainerCarregando>
          <ImagemCarregando src={imagemCarregando} alt="Carregando..." />
        </ContainerCarregando>
      ) : (
        <>
          <FiltroContainer>
            <div>
              <FiltroButton
                onClick={() => setShowUserPlaylists(false)}
                aria-label="Exibir todas as playlists"
              >
                Todas as Playlists
              </FiltroButton>
              <FiltroButton
                onClick={() => setShowUserPlaylists(true)}
                aria-label="Exibir minhas playlists"
              >
                Minhas Playlists
              </FiltroButton>
            </div>
            <div>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar playlists..."
                aria-label="Buscar por nome de playlist"
              />
              <SelectFiltro
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                aria-label="Ordenar playlists"
              >
                <option value="">Ordenar por</option>
                <option value="name-asc">Nome A-Z</option>
                <option value="name-desc">Nome Z-A</option>
              </SelectFiltro>
            </div>
          </FiltroContainer>

          <ContainerPlaylist>
            <PaginationContainer>
              <PaginationButton
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                aria-label="Página anterior"
              >
                Anterior
              </PaginationButton>
              <span>
                {currentPage}/{totalPages}
              </span>
              <PaginationButton
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                aria-label="Próxima página"
              >
                Próxima
              </PaginationButton>
            </PaginationContainer>
            {paginatedPlaylists().length > 0 ? (
              <ListaPlaylist>
                {paginatedPlaylists().map((playlist) => (
                  <ListItens key={playlist._id}>
                    <InfoTotal
                      onClick={() => handlePlaylistClick(playlist._id)}
                      aria-label="Abrir playlist"
                    >
                      <DivImagem>
                        <ImagemPlaylist
                          src="https://picsum.photos/200/300?random=1"
                          alt="Imagem Playlist"
                        />
                      </DivImagem>
                      <InfoPlaylist>
                        <h3>{playlist._name}</h3>
                        <p>{playlist._description}</p>
                        <p>Músicas: {playlist._songs.length}</p>
                      </InfoPlaylist>
                    </InfoTotal>
                    <Botoes>
                      {playlist._userId ===
                        getTokenData(localStorage.getItem("authenticacao"))
                          ?.id && (
                        <>
                          <BotaoEditar
                            onClick={() => abrirModalEdicao(playlist)}
                            aria-label="Editar playlist"
                          >
                            <img src={editar} alt="Icone editar" />
                          </BotaoEditar>
                          <BotaoDeletar
                            onClick={() => deletarPlaylist(playlist._id)}
                            aria-label="Deletar playlist"
                          >
                            X
                          </BotaoDeletar>
                        </>
                      )}
                    </Botoes>
                  </ListItens>
                ))}
              </ListaPlaylist>
            ) : (
              <PlaylistVazia>
                <img src={playVazia} alt="Playlist vazia" />
              </PlaylistVazia>
            )}
          </ContainerPlaylist>
        </>
      )}
      <Modal
        aberto={ModalOpen}
        fechado={() => setModalOpen(false)}
        conteudoModal={
          <>
            <TituloModal>
              <img src={detalheModal} alt="Icone playlists" />
              <h2>Criar Playlist</h2>
            </TituloModal>

            <Form onSubmit={(e) => e.preventDefault()}>
              <Separacao>
                <label>Qual será o nome da Playlist?</label>
                <Input
                  type="text"
                  value={novaPlaylist}
                  onChange={(e) => setNovaPlaylist(e.target.value)}
                  placeholder="Nome da playlist"
                  aria-label="Nome da playlist"
                />
              </Separacao>

              <label>Qual a descrição?</label>
              <Input
                type="text"
                value={descricaoPlaylist}
                onChange={(e) => setDescricaoPlaylist(e.target.value)}
                placeholder="Descricao Playlist"
                aria-label="Descricao Playlist"
              />
              <BotaoEnviar
                type="button"
                onClick={onClickCreatePlaylist}
                aria-label="Salvar playlist"
              >
                Salvar Playlist
              </BotaoEnviar>
            </Form>
          </>
        }
      />

      {editingPlaylist && (
        <EditModal
          playlist={editingPlaylist}
          onClose={() => setEditingPlaylist(null)}
          onUpdate={() => {
            const token = localStorage.getItem("authenticacao");
            const userData = getTokenData(token);
            if (userData?.id) buscarPlaylists(userData.id, token);
            setEditingPlaylist(null);
          }}
        />
      )}
      <ToastContainer />
    </Tudo>
  );
}
