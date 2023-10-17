import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../api';
import { useEffect, useState } from 'react';

export const ReviewDetails = () => {
  const { movieId } = useParams();
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    fetchMovieReview(movieId)
      .then(response => {
        setReviewData(response.results);
        console.log(reviewData);
      })
      .catch(error => {
        console.log('review details mistake');
      });
  },[]);
  const reviewArray = Array.isArray(reviewData) ? reviewData : [];
    console.log(reviewArray);
  return (
    <div>
      <ul className="movielist">
        {reviewArray.map(rData => (
            <li className="movieitem">
                <p>{rData.author}</p>                
                <p>{rData.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
