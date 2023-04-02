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
        {arr.map(author => (
          <li key={author.id}>
            <h4>{author.author}</h4>
            <p>{author.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
