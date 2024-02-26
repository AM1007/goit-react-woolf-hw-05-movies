## Preparing for work

1. Make sure that the LTS version of Node.js is installed on the computer.
   [Download and install](https://nodejs.org/en/) if necessary.
2. Install the project's basic dependencies using the `npm install` command.
3. Start the development mode, execute the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in the browser. This
   page will automatically reload after saving the changes project files.

---

### Movie search

Create a basic routing for the movie search and storage application. Preview the
working application at the
[link](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view)
below.

#### themoviedb.org API

For the backend, use the [themoviedb.org API](https://www.themoviedb.org/). It
is necessary to register (you can enter arbitrary data) and get an API key. The
following endpoints will be used in this work.

- [/trending/get-trending](https://developer.themoviedb.org/reference/trending-all):
  A list of the most popular movies today to create a collection on the
  homepage.
- [/search/search-movies](https://developer.themoviedb.org/reference/search-movie):
  Search for a movie by keyword on the movies page.
- [/movies/get-movie-details](https://developer.themoviedb.org/reference/movie-details):
  Request for full information about the movie for the movie page.
- [/movies/get-movie-credits](https://developer.themoviedb.org/reference/movie-credits):
  Request for information about the cast for the movie page.
- [/movies/get-movie-reviews](https://developer.themoviedb.org/reference/movie-reviews):
  Request for reviews for the movie page.

The documentation can be found at:
[link](https://developer.themoviedb.org/docs/getting-started)

#### Routes

In the application, there should be the following routes. If a user navigates to
a non-existent route, they should be redirected to the home page.

- `/` - The `Home` component, the homepage with a list of popular movies.
- `/movies` - The `Movies` component, a page for searching movies by keyword.
- `/movies/:movieId` - The `MovieDetails` component, a page with detailed
  information about the movie.
- `/movies/:movieId/cast` - The `Cast` component, information about the cast.
  Rendered on the `MovieDetails` page.
- `/movies/:movieId/reviews` - The `Reviews` component, information about
  reviews. Rendered on the `MovieDetails` page.

#### Code Splitting

Add asynchronous loading of JS code for application routes using React.lazy()
and Suspense.
