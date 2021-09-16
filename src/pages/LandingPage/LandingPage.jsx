import { Button, Container, Row } from 'react-bootstrap';
import css from './LandingPage.module.css';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className={css.main}>
      <Container>
        <Row>
          <div className={css.introText}>
            <div>
              <h1 className={css.title}>Welcome to</h1>
              <h1 className={css.title}>Customs Brocker Declarations</h1>
              <p className={css.subtitle}>
                One safe place for your declarations
              </p>
            </div>

            <div className={css.buttonContainer}>
              <a href="/login">
                <Button size="lg" className="landingButton">
                  Login
                </Button>
              </a>

              <a href="/register">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
