import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import States from './Components/States'


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/states' element={<States />} />
      </Routes>
    </>
  );
}

export default App;
