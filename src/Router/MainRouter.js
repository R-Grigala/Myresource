import { Link } from 'react-router-dom';
import MyRouter from './MyRouter';

function MainRouter() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>

      <MyRouter />
    </>
  );
}

export default MainRouter;