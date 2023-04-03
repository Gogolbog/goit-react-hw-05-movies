import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, Form, Input, Label } from './InputStyled';
import { useState } from 'react';
import MovieAPI from 'services/Api';

const movieApi = new MovieAPI();

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const location = useLocation();
  const updateQueryString = e => {
    const value = e.target.value;
    setSearchQuery(value);
    value === '' ? setSearchParams({}) : setSearchParams({ query: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await movieApi.getMovies(searchQuery);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="query">Пошук фільмів:</Label>
        <Input
          defaultValue={searchQuery}
          onChange={updateQueryString}
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder="Введіть назву фільму"
        />
        <Button type="submit">Пошук</Button>
      </Form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
