import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'services/movies-api';

import MovieCard from 'components/MovieCard/MovieCard';
import NotFound from 'pages/NotFound/NotFound';
import Section from 'components/Section/Section';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');

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
      <Section>
        <MovieCard movie={movie} />
      </Section>
    </main>
  );
};
export default MovieDetails;
