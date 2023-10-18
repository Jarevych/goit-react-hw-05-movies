import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../api';
import { useEffect, useState } from 'react';

export default function ReviewDetails() {
  const { movieId } = useParams();
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    fetchMovieReview(movieId)
      .then(response => {
        setReviewData(response.results);
      })
      .catch(error => {
        console.log('review details mistake');
      });
  }, [movieId]);
  const reviewArray = Array.isArray(reviewData) ? reviewData : [];
  return (
    <div>
      {reviewArray.length === 0 && <p>No reviews to display</p>}
      <ul className="movielist">
        {reviewArray.map(rData => (
          <li className="movieitem" key={rData.id}>
            <p>{rData.author}</p>
            <p>{rData.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
