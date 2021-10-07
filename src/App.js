import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import { HomePage, LoginPage, MyNotes, RegisterPage } from './pages';
import { Footer, Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/mydeclarations" component={MyNotes} />
          <Redirect to={routes.home} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
