import React from "react";
import "../styles/home-no-login.css";
import navBarLogo from "../assets/logos/logo_navbar_fw.svg";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function HomeNoLogin() {
  const [theme, setTheme] = React.useState("light");

  // strings
  const title = "¡La forma más divertida de aprender a conducir!";

  const registerText = "Regístrate";
  const startText = "Empieza ahora";

  return (
    <React.Fragment>
      <header>
        <div className="logo">
          <img src={navBarLogo} alt="Navbar Logo" />{" "}
        </div>
        <div
          className="theme-switcher"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <button className="icon">🌙</button>
        </div>
      </header>
      <main>
        <div className="left-column">
          <h1> {title} </h1>
          <div className="buttons">
            <button className="primary-button">
              {startText.toUpperCase()}
            </button>
            <button className="secondary-button">
              {registerText.toUpperCase()}
            </button>
          </div>
        </div>
        <div className="right-column">
          <div className="img-player">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <Player
              src="https://lottie.host/2dcf9310-41d0-4481-bb9a-a686675032bd/wMMTOCArbQ.json"
              background="transparent"
              loop
              controls
              autoplay
            ></Player>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default HomeNoLogin;
