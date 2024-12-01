// src/Routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
import { Login } from "../../pages/Login/Login";
import { PlaylistUser } from "../../pages/PlaylistsUser/PlaylistUser";
import { MusicUser } from "../../pages/MusicUser/MusicUser";  
import { DetalhePlaylist } from "../../pages/PlaylistsUser/DetalhePlaylist";
import { DetalheMusica } from "../../pages/MusicUser/DetalheMusica";
import { Error } from "../../pages/Error/Error";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";

const Rotas = ({ isLoggedIn, handleLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login Logando={handleLogin} />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<Home />} isLoggedIn={isLoggedIn} />}
      />
      <Route
        path="/playlists"
        element={
          <PrivateRoute element={<PlaylistUser />} isLoggedIn={isLoggedIn} />
        }
      />
      <Route
        path="/playlist/:playlistId"
        element={
          <PrivateRoute element={<DetalhePlaylist />} isLoggedIn={isLoggedIn} />
        }
      />
      <Route
        path="/musics"
        element={
          <PrivateRoute element={<MusicUser />} isLoggedIn={isLoggedIn} />
        }
      />
      <Route
        path="/musica/:id"
        element={
          <PrivateRoute element={<DetalheMusica />} isLoggedIn={isLoggedIn} />
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Rotas;
