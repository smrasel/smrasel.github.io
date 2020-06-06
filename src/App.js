import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

<nav>
          <ul className="dn">
            <li>
              <Link to="/">Rion</Link>
            </li>
            <li>
              <Link to="/about">NPlanner</Link>
            </li>
            <li>
              <Link to="/users">DK</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  return <h2>Users</h2>;
}