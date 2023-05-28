import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        {/* Agrega las rutas restantes aquí */}
      </Switch>
    </Router>
  );
}

export default App;
