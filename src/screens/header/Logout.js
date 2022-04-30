import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = (props) => {
  let navigate = useNavigate();

  const { email } = props.token || {};

  const onSubmit = () => {
    props.setToken(null);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <label>Welcome {email}</label>
      <Link to="/share">
        <button type="button">Share a movie</button>
      </Link>
      <button type="button" onClick={onSubmit}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
