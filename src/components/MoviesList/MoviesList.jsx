import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';


const MoviesList = ({ movies, flag }) => {
  const location = useLocation();
  return (
    <>
    <ul>
      {movies.map(({id, poster_path, title}) => {
        return (
          <li key={nanoid()}>
            <Link to={`${flag}${id}`} state={{from: location}}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://www.reelviews.net/resources/img/default_poster.jpg'
                }
                alt={title}
              />
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
    </>
  );
};

export default MoviesList;
