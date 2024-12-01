// src/App.js

import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Components/Rotas/Rotas";
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
        <Rotas isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      </Page>
    </BrowserRouter>
  );
}

export default App;
