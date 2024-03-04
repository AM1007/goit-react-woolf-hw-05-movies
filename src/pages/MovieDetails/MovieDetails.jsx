import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { fetchMovie } from '../../api/requests';
import placeholder from '../../images/no_img.png';

import CastAndReviews from 'components/CastAndReviews/CastAndReviews';
import Loader from 'components/Loader/Loader';

import {
  Container,
  ContainerInfo,
  GenreItem,
  GenreList,
  Img,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovie(movieId).then(results => {
      setMovie(results);
    });
  }, [movieId]);

  const goBack = () => {
    navigate(from);
  };

  if (!movie) {
    return;
  }

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <div>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <Container>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : placeholder
          }
          alt=""
        />
        <ContainerInfo>
          <h1>
            {original_title} ({release_date.slice(0, 4)})
          </h1>
          <p>User Score: {Number.parseInt(vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <GenreList>
            {genres.map(({ id, name }) => (
              <GenreItem key={id}>{name}</GenreItem>
            ))}
          </GenreList>
        </ContainerInfo>
      </Container>
      <div>
        <CastAndReviews movieId={movieId} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetails;
