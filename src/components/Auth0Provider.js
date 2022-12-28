import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-pt44rf70pk8szrwn.us.auth0.com"
    clientId="uja7uL1qUdRfNYnyGGrQdFfOQeEAhECv"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  document.getElementById("root")
);
