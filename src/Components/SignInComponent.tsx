import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "./Helper";
import "./SignInComponent.scss";
interface LoginUserProfile {
  givenName: string;
  familyName: string;
  email: string;
  name: string;
  googleId: string;
  imageUrl: string;
}

interface UserProfileComponentProps {
  user: LoginUserProfile;
}

const UserProfileComponent: React.FC<UserProfileComponentProps> = (props) => {
  const { user } = props;
  return (
    user && (
      <React.Fragment>
        <div className="user-profile">
          <img src={user.imageUrl} alt="user profile" />
          <div className="message">Hello {user.givenName}!</div>
        </div>
      </React.Fragment>
    )
  );
};

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
      <div className="sign-in-component">
        <UserProfileComponent user={currentLoginUser} />
        {currentLoginUser ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Sign out account"
            onLogoutSuccess={onLogoutSuccess}
            className="google-button"
          />
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            className="google-button"
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default SignIn;
