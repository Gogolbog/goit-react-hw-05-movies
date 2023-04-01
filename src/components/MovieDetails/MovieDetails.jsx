// http://localhost:3000/goit-react-hw-05-movies/movies/:55555

import { Outlet } from 'react-router-dom';
import {
  AdditionalInfoContainer,
  AdditionalInfoLink,
  AdditionalInfoList,
  AdditionalInfoListItem,
  DetailsWrapper,
  H2,
  H3,
  InfoItem,
  InfoList,
  MovieDetailsButton,
  MovieDetailsContainer,
  MovieDetailsTitle,
  MovieImage,
} from './MovieDetailsStyles';

export default function MovieDetails() {
  return (
    <div>
      <MovieDetailsContainer>
        <MovieImage src="#" alt="картинка фільма" />
        <DetailsWrapper>
          <MovieDetailsTitle>Назва фільма</MovieDetailsTitle>
          <span>user score</span>
          <InfoList>
            <InfoItem>
              <H3>Overview</H3>
              <p>Overview details</p>
            </InfoItem>
            <InfoItem>
              <H3>Genres</H3>
              <p>drama xyima</p>
            </InfoItem>
          </InfoList>
          <MovieDetailsButton type="button">Go back</MovieDetailsButton>
        </DetailsWrapper>
      </MovieDetailsContainer>
      <AdditionalInfoContainer>
        <H2>Additional information</H2>
        <AdditionalInfoList>
          <AdditionalInfoListItem>
            <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
          </AdditionalInfoListItem>
          <AdditionalInfoListItem>
            <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
          </AdditionalInfoListItem>
        </AdditionalInfoList>
      </AdditionalInfoContainer>
      <Outlet />
    </div>
  );
}
