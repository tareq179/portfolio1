import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Prices from './Components/Prices/Prices';
import Navbar from './Components/Navber/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/prices">
            <Prices />
          </Route>
          <Route path="/banner">
            <Banner />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
