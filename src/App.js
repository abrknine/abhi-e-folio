import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="app" >
     <Navbar className="a"/>
     <Home className="b"/>
     <About className="c"/>
     <Portfolio className="my-30"/>
     <Experience className="my-20"/>
     <Contact className="f"/>
     <SocialLinks className="g"/>
    </div>
  );
}

export default App;
