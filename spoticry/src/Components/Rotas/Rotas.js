import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { PlaylistUser } from "../PlaylistsUser/PlaylistUser";
import { MusicUser } from "../MusicUser/MusicUser";
import { DetalhePlaylist } from "../PlaylistsUser/DetalhePlaylist";
import { DetalheMusica } from "../MusicUser/DetalheMusica";
import { Error } from "../../pages/Error/Error";

const Router = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/playlists" element={<PlaylistUser />} />
    <Route path="/musics" element={<MusicUser />} />
    <Route path="/playlist/:playlistId" element={<DetalhePlaylist />} />
    <Route path="/musica/:id" element={<DetalheMusica />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default Router;
