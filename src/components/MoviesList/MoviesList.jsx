import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li title={title} id={id} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

// import MoviesItem from 'pages/Movies/MuviesItem/MuviesItem';

// const MoviesList = ({ movies }) => {
//   return (
//     <ul>
//       {movies.map(({ title, id }) => (
//         <MoviesItem title={title} id={id} key={id} />
//       ))}
//     </ul>
//   );
// };

// export default MoviesList;
