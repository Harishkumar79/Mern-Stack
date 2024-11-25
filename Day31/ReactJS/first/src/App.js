import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
    
      <Nav/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
