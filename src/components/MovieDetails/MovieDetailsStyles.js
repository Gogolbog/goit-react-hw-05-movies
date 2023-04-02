import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MovieDetailsLink = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: #6ec6ff;
  color: #fff;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: #6ec6ff;
  }
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const AdditionalInfoLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 50px;
  color: #fff;
  border: 2px solid #6ec6ff;
  background-color: #6ec6ff;
  text-decoration: none;
  padding: 1px 5px;
  border-radius: 5px;
  &:hover {
    background-color: yellow;
    color: #6ec6ff;
    border: 2px solid yellow;
  }
`;
export const AdditionalInfoListItem = styled.li`
  margin-right: 1rem;
  font-size: 15px;
`;

export const H2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1.3rem;
`;
