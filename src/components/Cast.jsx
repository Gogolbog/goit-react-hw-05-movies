import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieAPI from 'services/Api';

const castsApi = new MovieAPI();

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  const arr = casts.cast ?? [];

  useEffect(() => {
    async function fetchMovieDetails() {
      const data = await castsApi.getMovieCredits(movieId);
      setCasts(data);
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <p>Cast:</p>
      <ul>
        {arr.map(actor => (
          <li key={actor.id}>
            <p>{actor.character}</p>
            <p>{actor.name}</p>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              loading="lazy"
              alt={`${actor.name}'s profile picture`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
