import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useRef } from 'react';

import {
  BackLink,
  BackArrow,
  InfoWrapper,
  Image,
  SubTitle,
  Text,
  List,
  Item,
} from './MovieCard.styled';

const MovieCard = ({
  movie: { poster_path, title, vote_average, overview, genres = [] },
}) => {
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');
  return (
    <>
      <BackLink to={backLocation.current} state={{ from: location }}>
        <BackArrow size="24" />
        Back to previous page
      </BackLink>
      <article>
        <InfoWrapper>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://www.reelviews.net/resources/img/default_poster.jpg'
            }
            alt=""
            width="400"
          />
          <div>
            <SubTitle>{title}</SubTitle>
            <Text>User Score: {Math.round(vote_average * 10)}&#37;</Text>
            <SubTitle>Overview:</SubTitle>
            <Text>{overview}</Text>
            <SubTitle>Genres:</SubTitle>
            <Text>{genres.map(genre => genre.name).join(', ')}</Text>
          </div>
        </InfoWrapper>
        <SubTitle>Additional information</SubTitle>
        <List>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </article>
    </>
  );
};

export default MovieCard;
