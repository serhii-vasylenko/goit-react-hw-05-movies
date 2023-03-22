import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';

import { Item, Title, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        const controller = new AbortController();
        controller.abort();
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <Title>Author: {author}</Title>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;
