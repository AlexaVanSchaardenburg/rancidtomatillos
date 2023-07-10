import './Nav.css';
import rancidTomatillosLogo from "./assets/rancid-tomatillos-logo.png";
import Button from './Button';


const Nav = ({ showButton, onClick }) => {
  return (
    <nav className="nav-container">
      <img src={rancidTomatillosLogo} alt="Rancid Tomatillos Logo" className="logo" />
      {showButton && <Button onClick={onClick} />}
    </nav>
  );
};


export default Nav;