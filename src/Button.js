import './Button.css';
import homeIcon from './assets/home-icon.png';

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <img className="home-icon" src={homeIcon} alt="Home Button" />
    </button>
  );
};


export default Button;