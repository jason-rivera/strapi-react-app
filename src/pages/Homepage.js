import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/reviews'
  );

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error.length > 0 || data.error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      {data.data.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='rating'>{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>

          <small>console list</small>

          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
