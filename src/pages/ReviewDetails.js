import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/reviews/' + id
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
      <div key={data.data.id} className='review-card'>
        <div className='rating'>{data.data.attributes.rating}</div>
        <h2>{data.data.attributes.title}</h2>

        <small>console list</small>

        <p>{data.data.attributes.body}</p>
        <Link to={`/details/${data.data.id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default ReviewDetails;
