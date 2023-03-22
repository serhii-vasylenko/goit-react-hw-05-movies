import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/movies-api';

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
    <ul>
      {cast.map(({ profile_path, name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : 'https://cdn.imgbin.com/22/8/4/imgbin-anonymity-person-computer-icons-word-of-mouth-2d3qNY6qL67q5Men7Qx6fC0B5.jpg'
              }
              alt=""
              width="300"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
