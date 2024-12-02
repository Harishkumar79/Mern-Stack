import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home';
import States from './Components/States'
import Events from './Components/Events';
import Effects from './Components/Effects';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/states' element={<States />} />
        <Route path='/events' element={<Events />} />
        <Route path='/effects' element={<Effects />} />
      </Routes>
    </>
  );
}

export default App;
