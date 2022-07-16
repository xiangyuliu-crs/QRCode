import React from "react";
import "./App.css";
import GenerateQRCode from "./Components/GenerateQRCodeComponent.js";
import SignIn from "./Components/SignInComponent.tsx";
import WelcomeComponent from "./Components/WelcomeComponent.jsx";

function App() {
  const [loginUser, setLoginUser] = React.useState(null);

  return (
    <div className="App">
      <SignIn currentLoginUser={loginUser} setLoginUser={setLoginUser} />
      {loginUser ? <GenerateQRCode /> : <WelcomeComponent />}
    </div>
  );
}

export default App;
