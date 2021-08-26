import { Home, Profile, Login, Register } from './pages';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile/:username" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
