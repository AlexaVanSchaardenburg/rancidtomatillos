import './Nav.css';
import rancidTomatillosLogo from "./assets/rancidTomatillosLogo.png";
import homeIcon from "./assets/home-icon.png";

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={rancidTomatillosLogo} alt="Rancid Tomatillos Logo" className="logo" />
    </nav>
  );
};

export default Nav;