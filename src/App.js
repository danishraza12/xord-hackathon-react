import { Dashboard, AppointmentPage, UnderDevelopment } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/appointments">
            <AppointmentPage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/under-development">
            <UnderDevelopment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
