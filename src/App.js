import React from "react";
import "./App.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "./Components/Helper";
import GenerateQRCode from "./Components/GenerateQRCodeComponent.js";
import SignIn from "./Components/SignInComponent.tsx";

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

  const [loginUser, setLoginUser] = React.useState(null);

  return (
    <div className="App">
      <SignIn currentLoginUser={loginUser} setLoginUser={setLoginUser} />
      <GenerateQRCode />
    </div>
  );
}

export default App;
