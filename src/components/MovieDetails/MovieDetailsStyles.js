import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieDetailsTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;
export const H3 = styled.h2`
  margin-top: 10px;
  font-size: 1.1rem;
`;
export const H2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1.3rem;
`;

export const MovieDetailsButton = styled.button`
  background-color: #6ec6ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: #6ec6ff;
  }
`;
export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
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
  color: #6ec6ff;
  border: 2px solid blue;
  text-decoration: none;
  padding: 1px 5px;
  border-radius: 5px;
  &:hover {
    color: #333;
  }
`;
export const AdditionalInfoListItem = styled.li`
  margin-right: 1rem;
  font-size: 15px;
`;
