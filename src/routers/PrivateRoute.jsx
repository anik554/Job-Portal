import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/signIn"} state={location?.pathname} />;
};

PrivateRoute.propTypes={
    children:PropTypes.node.isRequired
}

export default PrivateRoute;
