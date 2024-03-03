import MoviesItem from 'pages/Movies/MuviesItem/MuviesItem';

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ title, id }) => (
          <MoviesItem title={title} id={id} key={id} />
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
