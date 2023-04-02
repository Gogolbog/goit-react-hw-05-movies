import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieAPI from 'services/Api';
import { HomeWrapper, UL } from './HomeStyled';

const api = new MovieAPI();

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <HomeWrapper>
      <h1>Trending today</h1>
      <UL>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </UL>
    </HomeWrapper>
  );
}
