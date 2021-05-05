import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import About from './pages/about';
import Experience from './pages/experience.js';
import Education from './pages/education';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/about' exact component={About} />
        <Route path='/experience' exact component={Experience} />
        <Route path='/education' exact component={Education} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
