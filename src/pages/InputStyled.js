import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 400px;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px #bde4ff;
    border: 1px solid #6ec6ff;
  }
`;

export const Button = styled.button`
  background-color: #0074d9;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6ec6ff;
    color: yellow;
  }

  &:focus {
    outline: none;
  }
`;
