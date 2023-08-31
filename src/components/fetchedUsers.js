import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from '../user/userSlice';
import User from '../user/userSlice'

const FetchedUseres = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    const promise = dispatch(fetcher());
    return () => promise.abort();
  }, [dispatch]);
  if (loading) {
    return <div ><h2>Loading ...</h2></div>;
  }
  if (error !== undefined) {
    return <div ><h2>{error}</h2></div>;
  }
  if (list.length === 0) {
    return <div ><h2>No Users!</h2></div>;
  }
  return (
    <ul>
      {list.map((user) => <User key={user.id.value} name={user.name} />)}
    </ul>
  );
};

export default FetchedUseres;