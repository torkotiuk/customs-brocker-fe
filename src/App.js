import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import {
  CreateDeclarationPage,
  HomePage,
  LoginPage,
  DeclarationsPage,
  RegisterPage,
  UpdateDeclarationPage,
} from './pages';
import { Footer, Header } from './components';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch} />
      <main>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route
            path="/mydeclarations"
            component={() => <DeclarationsPage search={search} />}
          />
          <Route
            path={routes.createdeclaration}
            component={CreateDeclarationPage}
          />
          <Route
            path={routes.updatedeclaration}
            component={UpdateDeclarationPage}
          />
          <Redirect to={routes.home} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
