import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import { getTrending } from 'services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { results } = await getTrending();
        setMovies(results);
      } catch (error) {
        const controller = new AbortController();
        controller.abort();
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} flag={'movies/'}/>
    </div>
  );
};

export default Home;
