import { HomeItem } from '../HomeItem/HomeItem';
import { useEffect, useState } from 'react';

import apiWeekMovies from 'components/api/requests';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiWeekMovies.fetchDataWeek().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <HomeItem title={title} id={id} key={id} />
      ))}
    </ul>
  );
};
