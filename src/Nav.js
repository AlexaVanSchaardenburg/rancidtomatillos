import './Nav.css';
import rancidTomatillosLogo from "./assets/rancid-tomatillos-logo.png";
import Button from './Button';

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={rancidTomatillosLogo} alt="Rancid Tomatillos Logo" className="logo" />
      <Button className="home-button"/>
    </nav>
  );
};

export default Nav;