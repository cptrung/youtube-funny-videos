import React from "react";

import HeaderTitle from "./Title";
import Logout from "./Logout";
import Login from "./Login";
import useToken from "../../utils/useToken";

const Header = () => {
  const { token, setToken } = useToken();
  return (
    <div className="header">
      <HeaderTitle />
      {(token && <Logout token={token} setToken={setToken} />) || (
        <Login setToken={setToken} />
      )}
    </div>
  );
};

export default Header;
