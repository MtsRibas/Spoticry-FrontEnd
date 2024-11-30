export const goToLandingPage = (navigate) => {
  navigate("/");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToHomePage = (navigate) => {
  navigate("/home");
};

export const goToPlaylists = (navigate) => {
  navigate("/playlists");
};

export const goToMusics = (navigate) => {
  navigate("/musics");
};

export const goBack = (navigate) => {
  navigate(-1);
};
export const goDetalhePlaylist = (navigate) => {
  navigate("/playlist/:id");
};
export const goDetalheMusicas = (navigate) => {
  navigate("/musica/:id");
};
