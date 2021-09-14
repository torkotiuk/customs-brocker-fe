import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
