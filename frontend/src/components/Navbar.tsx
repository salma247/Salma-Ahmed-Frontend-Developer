import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { logout } from "../services/api";
import { getToken } from "../services/getToken";


export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center py-4 px-8" data-testid="navbar">
        <img src={logo} alt="SpaceX" className="h-8 w-8 mr-2" />
        <h1>SpaceX</h1>
      </div>
      {getToken() ? (
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          to="/login"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
