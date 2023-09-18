import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center py-4 px-8" data-testid="navbar">
        <img src={logo} alt="SpaceX" className="h-8 w-8 mr-2" />
        <h1>SpaceX</h1>
      </div>
    </nav>
  );
}
