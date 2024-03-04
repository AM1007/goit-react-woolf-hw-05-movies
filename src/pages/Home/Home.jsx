import MoviesList from 'components/MoviesList/MoviesList';
import apiWeekMovies from '../../api/requests';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiWeekMovies.fetchDataWeek().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <Title>Trends of the week</Title>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
