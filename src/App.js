import React from "react";
import "./App.css";
import LoginButton from "./Components/LoginComponent.tsx";
import LogoutButton from "./Components/LogoutComponent.tsx";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { CLIENT_ID, DROPDOWN_OPTIONS } from "./Components/Helper";
import Dropdown from "./Components/DropdownComponent.tsx";
import QRCode from "./Components/QRCodeComponent.tsx";

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

  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Dropdown
        options={DROPDOWN_OPTIONS}
        placeholder={{ value: "", label: "select your option" }}
        selectedValue={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <QRCode valueForQRCode={selectedValue} />
    </div>
  );
}

export default App;
