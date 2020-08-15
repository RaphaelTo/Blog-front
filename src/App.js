import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/article/:id">
            </Route>
            <Route path="/about">
            </Route>
            <Route>
            </Route>
        </Switch>
    </Router>
  );
};

export default App;
