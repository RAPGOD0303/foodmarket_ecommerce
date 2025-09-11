import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';
import SignUp from './Components/SignUp';
// import Bestsellingcomp from './Components/Bestsellingcomp';
// import Category from './Components/Category';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/home' element={<Navbarcomp />}></Route>
          {/* <Route path='/bestselling' element={<Bestsellingcomp/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
