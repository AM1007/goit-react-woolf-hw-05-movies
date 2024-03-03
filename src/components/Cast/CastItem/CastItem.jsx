import placeholder from '../../../images/placeholder.png';
import { Img } from './CastItemStyled';

const CastItem = ({ name, profile, character }) => {
  return (
    <li>
      <Img
        src={
          profile ? `https://image.tmdb.org/t/p/w500/${profile}` : placeholder
        }
        alt=""
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
