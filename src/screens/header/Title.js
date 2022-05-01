import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeaderTitle = () => {
  return (
    <div className="title-box" data-testid="title-box">
      <FaHome size={35} />
      <Link to="/" data-testid="header-title">
        Funny Movies
      </Link>
    </div>
  );
};

export default HeaderTitle;
