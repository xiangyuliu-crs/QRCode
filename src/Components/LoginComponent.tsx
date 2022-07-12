import React from "react";
import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "./Helper";

const onSuccess = (res) => {
  console.log("[Login Success] currentUser:", res.profileObj);
};

const onFailure = (res) => {
  console.log("[Login failed] res:", res);
};

const Login: React.FC = (props) => {
  return (
    <React.Fragment>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </React.Fragment>
  );
};

export default Login;
