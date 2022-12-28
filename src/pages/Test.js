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

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        {/* <p>{user.email}</p> */}
        <p>{user.user_id}</p>
      </div>
    )
  );
};

export default Profile;
