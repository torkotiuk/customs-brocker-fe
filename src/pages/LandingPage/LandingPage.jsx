import { Container, Row } from 'react-bootstrap';
import { AuthNav } from '../../components';
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
              <AuthNav />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
