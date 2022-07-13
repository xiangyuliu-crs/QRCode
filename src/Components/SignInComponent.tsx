import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "./Helper";

const onLoginSuccess = (res) => {
  console.log("[Login Success] currentUser:", res.profileObj);
};

const onLoginFailure = (res) => {
  console.log("[Login failed] res:", res);
};

const Login: React.FC = () => (
  <GoogleLogin
    clientId={CLIENT_ID}
    buttonText="Sign in with Google"
    onSuccess={onLoginSuccess}
    onFailure={onLoginFailure}
    cookiePolicy={"single_host_origin"}
    isSignedIn={true}
  />
);

const onLogoutSuccess = () => {
  console.log("Log out successfully!");
};

const Logout: React.FC = () => (
  <GoogleLogout
    clientId={CLIENT_ID}
    buttonText="Sign out"
    onLogoutSuccess={onLogoutSuccess}
  />
);

const SignIn: React.FC = () => {
  return (
    <React.Fragment>
      <Login />
      <Logout />
    </React.Fragment>
  );
};

export default SignIn;
