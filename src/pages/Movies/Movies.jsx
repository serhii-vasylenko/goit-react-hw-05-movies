import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/SearchBar/SearchBar';
import NotFound from 'pages/NotFound/NotFound';
import Section from 'components/Section/Section';

import { getMovieByQuery } from 'services/movies-api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetch = async () => {
      try {
        const { results } = await getMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query]);

  return (
    <main>
      <Section>
        <Searchbar value={query} onChange={updateQueryString} />
        {movies.length > 0 && <MoviesList movies={movies} flag={''} />}
        {query && movies.length === 0 && <NotFound />}
        {!query && movies.length === 0 && <div style={{height: '100vh'}}></div>}
      </Section>
    </main>
  );
};

export default Movies;
