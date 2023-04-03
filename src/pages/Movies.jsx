import { useSearchParams } from 'react-router-dom';
import { Button, Form, Input, Label } from './InputStyled';
// import { useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getMovieId = searchParams.get('movieId') ?? '';

  const updateQueryString = e => {
    const value = e.target.value;
    value === '' ? setSearchParams({}) : setSearchParams({ movieId: value });
  };

  console.log(getMovieId);
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
