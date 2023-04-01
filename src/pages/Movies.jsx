import { Button, Form, Input, Label } from './InputStyled';

export default function Movies() {
  return (
    <Form>
      <Label htmlFor="search">Пошук фільмів:</Label>
      <Input
        type="text"
        id="search"
        name="search"
        placeholder="Введіть назву фільму"
      />
      <Button type="submit">Пошук</Button>
    </Form>
  );
}
