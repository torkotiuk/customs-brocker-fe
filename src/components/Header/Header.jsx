import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
const history = useHistory();
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Customs Brocker Declarations</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={css.NavBar}>
          <Nav className="m-auto">
            <Form inline>
              <FormControl type="text" placeholder="Search" />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link>
              <Link to="/mydeclarations">My declarations</Link>
            </Nav.Link>
            <NavDropdown title="User123" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                  localStorage.removeItem('userInfo');
                  history.push('/');
                }}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
