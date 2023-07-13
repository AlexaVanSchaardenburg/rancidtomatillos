import './Nav.css';
import rancidTomatillosLogo from "./assets/rancid-tomatillos-logo.png";
import Button from './Button';


const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={rancidTomatillosLogo} alt="Rancid Tomatillos Logo" className="logo" />
      //The only thing that changed in this file is I removed all the props being passed to the Button component, these are no longer needed because the route takes care of all of the rendering conditional logic
      <Button />
    </nav>
  );
};


export default Nav;