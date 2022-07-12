import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "931300416385-rgbodtv14r8rt4d0r36evat17hs18lu7.apps.googleusercontent.com";

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
        clientId={clientId}
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
