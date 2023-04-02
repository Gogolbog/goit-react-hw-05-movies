import {
  DetailsWrapper,
  H3,
  InfoItem,
  InfoList,
  MovieDetailsContainer,
  MovieDetailsTitle,
  MovieImage,
} from './MovieCardStyled';

export default function MovieCard({ movie }) {
  const genres = movie.genres ?? [];
  return (
    <MovieDetailsContainer>
      <MovieImage
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : `http://www.suryalaya.org/images/no_image.jpg`
        }
        loading="lazy"
        alt={movie.title}
      />
      <DetailsWrapper>
        <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
        <span>User score {(movie.vote_average * 10).toFixed(1)}%</span>
        <InfoList>
          <InfoItem>
            <H3>Overview</H3>
            <p>{movie.overview}</p>
          </InfoItem>
          <InfoItem>
            <H3>Genres</H3>
            {genres && genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
          </InfoItem>
        </InfoList>
      </DetailsWrapper>
    </MovieDetailsContainer>
  );
}
