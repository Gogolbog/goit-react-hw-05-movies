import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import {
  AdditionalInfoContainer,
  AdditionalInfoLink,
  AdditionalInfoList,
  AdditionalInfoListItem,
  H2,
  MovieDetailsLink,
  MovieWrapper,
} from './MovieDetailsStyles';
import MovieAPI from 'services/Api';

const movieApi = new MovieAPI();

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieDetails = await movieApi.getMovieDetails(movieId);
      setMovie(movieDetails);
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <MovieWrapper>
      <MovieCard movie={movie} />
      <MovieDetailsLink to={backLink.current}>Go back</MovieDetailsLink>
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
    </MovieWrapper>
  );
}
