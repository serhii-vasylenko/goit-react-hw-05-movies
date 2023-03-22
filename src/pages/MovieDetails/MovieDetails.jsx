import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { getMovieById } from 'services/movies-api';

import MovieCard from 'components/MovieCard/MovieCard';
import NotFound from 'pages/NotFound/NotFound';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await getMovieById(movieId);
        setMovie(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetch();
  }, [movieId]);

  return error ? (
    <NotFound />
  ) : (
    <main>
      <Link to={backLocation.current} state={{ from: location }}>Back</Link>
      <MovieCard movie={movie} />
    </main>
  );
};
export default MovieDetails;
