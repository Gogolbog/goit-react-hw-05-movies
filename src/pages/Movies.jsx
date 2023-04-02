import { useSearchParams } from 'react-router-dom';
import { Button, Form, Input, Label } from './InputStyled';
import { useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getMovieId = searchParams.get('movieId') ?? '';

  const visibleMovies = movies.map(movie => movie.include(getMovieId));

  const updateQueryString = e => {
    const value = e.target.value;
    value === '' ? setSearchParams({}) : setSearchParams({ movieId: value });
  };

  return (
    <Form>
      <Label htmlFor="movieId">Пошук фільмів:</Label>
      <Input
        value={getMovieId}
        onChange={updateQueryString}
        type="text"
        id="movieId"
        name="movieId"
        placeholder="Введіть назву фільму"
      />
      <Button type="submit">Пошук</Button>
    </Form>
  );
}
