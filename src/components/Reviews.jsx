import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieAPI from 'services/Api';

const reviewsApi = new MovieAPI();

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReviews] = useState([]);

  const arr = review.results ?? [];
  console.log('arr: ', arr);

  useEffect(() => {
    async function fetchMovieReviews() {
      const data = await reviewsApi.getMovieReviews(movieId);
      setReviews(data);
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <p>Reviews:</p>
      <ul>
        {arr.length
          ? arr.map(review => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))
          : 'We don`t have any reviews for this movie.'}
      </ul>
    </div>
  );
}
