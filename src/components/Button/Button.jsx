import css from './Button.module.css';

const Button = ({
  text,
  className = '',
  type = 'button',
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`${css.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
