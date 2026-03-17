import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {

  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  // agar user bhi nahi hai aur token bhi nahi hai
  if (!user && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectRoute;