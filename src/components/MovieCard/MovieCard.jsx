import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieCard = ({
  movie: { poster_path, title, vote_count, overview, genres = [] },
}) => {
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
        width="600"
      />
      <h2>{title}</h2>
      <p>User Score: {vote_count}&#37;</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </article>
  );
};

export default MovieCard;
