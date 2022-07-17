import React from "react";
import "./App.css";
import GenerateQRCode from "./Components/GenerateQRCodeComponent.js";
import SignIn from "./Components/SignInComponent.tsx";
import WelcomeComponent from "./Components/WelcomeComponent.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [loginUser, setLoginUser] = React.useState(null);

  return (
    <div className="App">
      <SignIn currentLoginUser={loginUser} setLoginUser={setLoginUser} />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              loginUser ? <GenerateQRCode /> : <WelcomeComponent />
            }
          />
        </Switch>
      </Router>
      {/* {loginUser ? <GenerateQRCode /> : <WelcomeComponent />} */}
    </div>
  );
}

export default App;
