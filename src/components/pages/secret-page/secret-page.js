import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
  const secret = <h3>Secret message</h3>;
  const redirect = <Redirect to="/login"/>;
  
  return isLoggedIn ? secret : redirect;
};

export default SecretPage;

