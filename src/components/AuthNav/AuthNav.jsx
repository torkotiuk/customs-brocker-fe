import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Link to="/login">
        <Button size="lg" className="landingButton">
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button size="lg" className="landingButton" variant="outline-primary">
          Signup
        </Button>
      </Link>
    </>
  );
};

export default AuthNav;
