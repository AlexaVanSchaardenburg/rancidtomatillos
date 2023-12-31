import './Button.css';
import homeIcon from './assets/home-icon.png';
import { NavLink } from 'react-router-dom'

const Button = () => {
  return ( 
    <NavLink to="/" id="button" className={(navState) => navState.isActive ? "active" : "" } >
      <img className="home-icon" src={homeIcon} alt="Home Button" />
      <div>______</div>
    </NavLink>
  );
};

export default Button;