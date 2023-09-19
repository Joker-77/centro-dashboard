import React from "react";
import { Redirect, Route, Navigate } from "react-router-dom";
import { useAuthState } from "../context/Auth/index";
import PropTypes from "prop-types";

const AppRoute = ({ component: Component, path, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(userDetails.token) ? (
          <Navigate to={{ pathname: "/authentication/sign-in" }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};
AppRoute.propTypes = {
  Component: PropTypes.any,
  path: PropTypes.string,
  isPrivate: PropTypes.bool,
};
export default AppRoute;
