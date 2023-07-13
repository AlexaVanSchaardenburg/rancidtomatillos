import './Button.css';
import homeIcon from './assets/home-icon.png';
//below I imported the NavLink component to be used in the Button component
import { NavLink } from 'react-router-dom'

const Button = () => {
  return (
    //here I replaced the button tag with a NavLink, took out the click handling, and added the path with the to="". This means when the NavLink element is clicked the page will automatically render the path defined by the / in the App file. 
    <NavLink to="/" className="button">
      <img className="home-icon" src={homeIcon} alt="Home Button" />
    </NavLink>
  );
};

export default Button;