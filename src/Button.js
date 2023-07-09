import PropTypes from 'prop-types';
import './Button.css';
import homeIcon from './assets/home-icon.png';

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <img className="home-icon" src={homeIcon} alt="Home Button" />
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;