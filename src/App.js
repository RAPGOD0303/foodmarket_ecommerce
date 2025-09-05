import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';
import SignUp from './Components/SignUp';
// import Category from './Components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/home' element={<Navbarcomp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
