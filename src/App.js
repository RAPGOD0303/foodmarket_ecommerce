import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbarcomp/>
   <Routes>
    <Route></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
