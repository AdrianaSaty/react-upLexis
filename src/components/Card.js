import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/card.scss';

function Card({ icon, title, description, price }) {
  return (
    <div className='c-card'>
      <div className='c-card__content'>
        <FontAwesomeIcon icon={['fas', icon]} size='2x' color='#FF7000' />
        <h1 className='c-card__title'>{title}</h1>
        <p className='c-card__description'>{description}</p>
      </div>
      <button className='c-card__button'>
        <p>R${price}</p>
        <p>Saiba mais</p>
      </button>
    </div>

  );
}

export default Card;
