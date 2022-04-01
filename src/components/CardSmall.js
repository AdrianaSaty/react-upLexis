import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/card-small.scss';

function CardSmall({ changeActiveButton, icon, title, active }) {
  return (
    <button
      onClick={() => changeActiveButton(title)}
      className={`c-card-small c-card-small${active ? "--active" : ""}`}
    >
      <FontAwesomeIcon icon={['fas', icon]} />
      <p className='c-card-small__text'>{title}</p>
    </button>
  );
}

export default CardSmall;
