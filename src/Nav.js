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

// need to add a conditional rendering of the button based on which page we are on, but I'm not sure how to do this yet.

export default Nav;