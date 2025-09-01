import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';
// import Category from './Components/Category';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbarcomp/>
   {/* <Category/> */}
   <Routes>
    <Route></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
