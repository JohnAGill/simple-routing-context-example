import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import Page2 from './pages/page2'
import ContextSource from './context/root'

function App() {
  return (
    <ContextSource>
      <Router>
        <Switch>
            <Route path="/page2" component={Page2} />
            <Route path="/" component={Home} />
          </Switch>
      </Router>
    </ContextSource>
  );
}

export default App;
