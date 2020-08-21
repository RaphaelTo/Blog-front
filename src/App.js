import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from "./pages";
import ArticlePage from "./pages/ArticlePage";

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/article/:id">
                <ArticlePage />
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
