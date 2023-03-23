import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/movies-api';

import { List, Item, Image, Text, Title } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        const controller = new AbortController();
        controller.abort();
      }
    };
    fetch();
  }, [movieId]);

  return (
    <List>
      {cast.map(({ profile_path, name, character, id }) => {
        return (
          <Item key={id}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : 'https://cdn.imgbin.com/22/8/4/imgbin-anonymity-person-computer-icons-word-of-mouth-2d3qNY6qL67q5Men7Qx6fC0B5.jpg'
              }
              alt=""
              width="300"
            />
            <Title>{name}</Title>
            <Text>{character}</Text>
          </Item>
        );
      })}
    </List>
  );
};

export default Cast;
