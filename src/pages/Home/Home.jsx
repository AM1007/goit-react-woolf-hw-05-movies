import MoviesList from 'components/MoviesList/MoviesList';
import apiWeekMovies from 'components/api/requests';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiWeekMovies.fetchDataWeek().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1>Trends of the week</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
