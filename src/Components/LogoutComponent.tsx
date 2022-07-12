import React from "react";
import { GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "./Helper";

const onSuccess = () => {
  console.log("Log out successfully!");
};

const Logout: React.FC = (props) => {
  return (
    <React.Fragment>
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </React.Fragment>
  );
};

export default Logout;
