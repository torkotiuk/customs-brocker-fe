import { Button } from 'react-bootstrap';

const AuthNav = () => {
  return (
    <>
      <a href="/login">
        <Button size="lg" className="landingButton">
          Login
        </Button>
      </a>
      <a href="/register">
        <Button size="lg" className="landingButton" variant="outline-primary">
          Signup
        </Button>
      </a>
    </>
  );
};

export default AuthNav;
