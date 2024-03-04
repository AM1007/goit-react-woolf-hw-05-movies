import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovie } from '../../api/requests';

import SearchMovie from '../../components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie(query).then(({ results }) => {
      setMovies(results);
    });
    return;
  }, [query]);

  const formSubmit = search => {
    setSearchParams({ query: search });
    setMovies([]);
  };

  return (
    <div>
      <SearchMovie onSubmit={formSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
export default Movies;
