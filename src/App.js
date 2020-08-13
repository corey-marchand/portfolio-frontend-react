import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Nav from './components/nav/Nav';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>

      <div className="style-div"></div>
    </div>
    </Router>
  );
}

export default App;
