import React from "react";
import "./App.css";
import LoginButton from "./Components/LoginComponent.tsx";
import LogoutButton from "./Components/LogoutComponent.tsx";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "./Components/Helper";
import GenerateQRCode from "./Components/GenerateQRCodeComponent.js";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <GenerateQRCode />
    </div>
  );
}

export default App;
