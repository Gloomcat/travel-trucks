import icons from '../../assets/icons.svg';

const Icon = ({ name, width, height, className = '' }) => (
  <svg className={className} width={width} height={height}>
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

export default Icon;
