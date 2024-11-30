import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { PlaylistUser } from "../PlaylistsUser/PlaylistUser";
import { MusicUser } from "../MusicUser/MusicUser";
import { DetalhePlaylist } from "../PlaylistsUser/DetalhePlaylist";
import { DetalheMusica } from "../MusicUser/DetalheMusica";

const Router = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/playlists" element={<PlaylistUser />} />
    <Route path="/musics" element={<MusicUser />} />
    <Route path="/playlist/:playlistId" component={DetalhePlaylist} />
    <Route path="/musica/:id" element={<DetalheMusica />} />
  </Routes>
);

export default Router;
