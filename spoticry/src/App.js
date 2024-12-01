import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home/Home";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Login } from "./pages/Login/Login";
import { PlaylistUser } from "./pages/PlaylistsUser/PlaylistUser";
import { MusicUser } from "./pages/MusicUser/MusicUser";
import { DetalhePlaylist } from "./pages/PlaylistsUser/DetalhePlaylist";
import { DetalheMusica } from "./pages/MusicUser/DetalheMusica";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { Colors } from "./Constants/Colors";

const Page = styled.div`
  padding: 10px 210px;
  background-color: black;
  color: ${Colors.Branco};
  height: 100%;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authenticacao")
  );

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login Logando={handleLogin} />} />
          <Route
            path="/home"
            element={
              <PrivateRoute element={<Home />} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/playlists"
            element={
              <PrivateRoute
                element={<PlaylistUser />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/playlist/:playlistId"
            element={
              <PrivateRoute
                element={<DetalhePlaylist />}
                isLoggedIn={isLoggedIn}
              />
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
              <PrivateRoute
                element={<DetalheMusica />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
