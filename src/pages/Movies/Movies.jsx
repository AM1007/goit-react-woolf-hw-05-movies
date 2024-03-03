import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovie } from 'components/api/requests';

import SearchMovie from '../../components/SearchMovies/SearchMovies';
import MoviesItem from './MuviesItem/MuviesItem';

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
      <ul>
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => (
            <MoviesItem title={original_title} id={id} key={id} />
          ))}
      </ul>
    </div>
  );
};
export default Movies;
