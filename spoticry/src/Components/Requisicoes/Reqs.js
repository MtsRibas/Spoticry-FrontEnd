import axios from "axios";
import { toast } from "react-toastify";
import { BaseURL } from "../../Constants/BaseURL";

export const fetchAllSongs = async (token) => {
  try {
    const response = await axios.get(`${BaseURL}/song`, {
      headers: { Authorization: token },
    });
    return response.data.songs;
  } catch (error) {
    if (error.response?.data?.error === "Token expired") {
      toast.error("Sua sessão expirou. Por favor, faça login novamente.");
      localStorage.removeItem("authenticacao");
      window.location.href = "/login";
    }
    console.error(
      "Erro ao buscar todas as músicas:",
      error.response || error.message
    );
    throw error;
  }
};

export const addSong = async (token, songData) => {
  try {
    const response = await axios.post(`${BaseURL}/song`, songData, {
      headers: { Authorization: token },
    });
    toast.success("Música adicionada com sucesso!");
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar música:", error.response || error.message);
    toast.error("Erro ao adicionar música");
    throw error;
  }
};

export const updateSong = async (token, songId, updatedData) => {
  try {
    await axios.patch(`${BaseURL}/song/${songId}`, updatedData, {
      headers: { Authorization: token },
    });
    toast.success("Música atualizada com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar música:", error.response || error.message);
    toast.error("Erro ao atualizar música!");
    throw error;
  }
};

export const deleteSong = async (token, songId) => {
  try {
    await axios.delete(`${BaseURL}/song/${songId}`, {
      headers: { Authorization: token },
    });
    toast.success("Música deletada com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar música:", error.response || error.message);
    toast.error("Erro ao deletar música!");
    throw error;
  }
};

export const fetchSongDetails = async (id, token) => {
  try {
    const response = await axios.get(`${BaseURL}/song/${id}`, {
      headers: { Authorization: token },
    });
    return response.data.song;
  } catch (error) {
    console.error(
      "Erro ao carregar detalhes da música:",
      error.response || error.message
    );
    toast.error("Erro ao carregar detalhes da música!");
    throw error;
  }
};
export const fetchPlaylistById = async (playlistId, token) => {
  try {
    const response = await axios.get(`${BaseURL}/playlist/${playlistId}`, {
      headers: { Authorization: `${token}` },
    });
    return response.data.playlist;
  } catch (err) {
    console.error("Erro ao buscar a playlist:", err.response || err.message);
    toast.error("Erro ao buscar a playlist.");
    throw err;
  }
};

export const fetchSongsFromPlaylist = async (playlistId, token) => {
  try {
    const response = await axios.get(`${BaseURL}/playlist/${playlistId}/song`, {
      headers: { Authorization: `${token}` },
    });
    return response.data.songs;
  } catch (err) {
    console.error(
      "Erro ao buscar músicas da playlist:",
      err.response || err.message
    );
    toast.error("Erro ao buscar músicas da playlist.");
    throw err;
  }
};

export const fetchSongDetailsById = async (songId, token) => {
  try {
    const response = await axios.get(`${BaseURL}/song/${songId}`, {
      headers: { Authorization: `${token}` },
    });
    return response.data.song;
  } catch (err) {
    console.error(
      "Erro ao buscar detalhes da música:",
      err.response || err.message
    );
    throw err;
  }
};

export const addSongToPlaylist = async (playlistId, songId, token) => {
  try {
    await axios.post(
      `${BaseURL}/playlist/${playlistId}/song`,
      { songId },
      {
        headers: { Authorization: `${token}` },
      }
    );
    toast.success("Música adicionada com sucesso!");
  } catch (error) {
    console.error(
      "Erro ao adicionar música à playlist:",
      error.response || error.message
    );
    toast.error("Erro ao adicionar música à playlist.");
    throw error;
  }
};

export const removeSongFromPlaylist = async (playlistId, songId, token) => {
  try {
    await axios.delete(`${BaseURL}/playlist/${playlistId}/song/${songId}`, {
      headers: { Authorization: `${token}` },
    });
    toast.success("Música removida com sucesso!");
  } catch (err) {
    console.error(
      "Erro ao remover música da playlist:",
      err.response || err.message
    );
    toast.error("Erro ao remover música da playlist.");
    throw err;
  }
};
export const updatePlaylist = async (id, data, token) => {
  try {
    const response = await axios.patch(`${BaseURL}/playlist/${id}`, data, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
