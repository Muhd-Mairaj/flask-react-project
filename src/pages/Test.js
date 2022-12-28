// import React from 'react';
// import Body from '../components/Body';


// function Test() {
//   return (
//     <Body loggedIn>
//       <div className="Test">
//         <h2>hello there</h2>
//       </div>
//     </Body>
//   )
// }

// export default Test;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={() => logout({ returnTo: "http:/login" })}>
        Log Out
      </button>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
};

export default LogoutButton;
