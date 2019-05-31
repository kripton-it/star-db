import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  const redirect = <Redirect to="/secret"/>;
  const login = (
    <>
      <p>Please, log in to see secret page</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Log In
      </button>
    </>
  );
  return isLoggedIn ? redirect : login;
};

export default LoginPage;
