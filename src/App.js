import "./App.css";
import LoginButton from "./Components/LoginComponent.tsx";
import LogoutButton from "./Components/LogoutComponent.tsx";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "./Components/Helper";
import Dropdown from "./Components/DropdownComponent.tsx";

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

  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Dropdown options={options} placeholder={"select your option"} />
    </div>
  );
}

export default App;
