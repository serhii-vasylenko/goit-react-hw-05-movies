import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { List, Item, Image } from 'components/MoviesList/MoviesList.styled';

const MoviesList = ({ movies, flag }) => {
  const location = useLocation();
  const sortedMovies = [...movies].sort(
    (first, second) => second.popularity - first.popularity
  );
  return (
    <List>
      {sortedMovies.map(({ id, poster_path, title }) => {
        return (
          <Item key={nanoid()}>
            <Link to={`${flag}${id}`} state={{ from: location }}>
              <Image
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://www.reelviews.net/resources/img/default_poster.jpg'
                }
                alt={title}
              />
              <p>{title}</p>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  flag: PropTypes.string,
};
