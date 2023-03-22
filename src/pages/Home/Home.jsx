import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';

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
    <main>
      <Section
        title={'Trending today'}>
        <MoviesList movies={movies} flag={'movies/'} />
      </Section>
    </main>
  );
};

export default Home;
