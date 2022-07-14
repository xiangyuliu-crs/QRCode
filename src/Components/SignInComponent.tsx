import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "./Helper";
export interface LoginUserProfile {
  givenName: string;
  familyName: string;
  email: string;
  name: string;
  googleId: string;
  imageUrl: string;
}

interface SignInProps {
  currentLoginUser: LoginUserProfile | undefined;
  setLoginUser: (user) => void;
}

const SignIn: React.FC<SignInProps> = (props) => {
  const { currentLoginUser, setLoginUser } = props;

  const onLoginSuccess = (res) => {
    setLoginUser(res.profileObj);
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onLoginFailure = (res) => {
    setLoginUser(null);
    console.log("[Login failed] res:", res);
  };

  const onLogoutSuccess = () => {
    setLoginUser(null);
    console.log("Log out successfully!");
  };

  return (
    <React.Fragment>
      {currentLoginUser && <div>Welcome {currentLoginUser.name}!</div>}
      {!currentLoginUser && (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
      {currentLoginUser && (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Sign out"
          onLogoutSuccess={onLogoutSuccess}
        />
      )}
    </React.Fragment>
  );
};

export default SignIn;
