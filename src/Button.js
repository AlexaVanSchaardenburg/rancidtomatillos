import './Button.css';
import homeIcon from './assets/home-icon.png';
import { NavLink } from 'react-router-dom'

const Button = () => {
  return ( 
    <NavLink to="/" className="button">
      <img className="home-icon" src={homeIcon} alt="Home Button" />
    </NavLink>
  );
};

export default Button;