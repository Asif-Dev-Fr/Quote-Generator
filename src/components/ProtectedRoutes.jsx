import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isLogged }) => {
  if (isLogged) return children;
  else return <Navigate to="/" />;
};
