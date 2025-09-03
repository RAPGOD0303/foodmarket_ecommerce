import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';
// import Category from './Components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarcomp />
        {/* <Category/> */}
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      {/* <div
        style={{
          height: "100%",
          width: "100%",
          position: "Fixed",
          backgroundColor: "gray",
          top: "0",
          left:'0',
          zIndex: "10000",
          opacity: "0.3",
            background: "rgba(255, 255, 255, 0.3)", // transparent white
        }}
      >
      
      </div>
        <div
          style={{
            height: "100%",
            width: "30%",
            position: "Fixed",
            backgroundColor: "yellow",
            top: "0",
           
            right:'0',
            zIndex: "10001",
          }}
        >
          hellow
        </div> */}
    </>
  );
}

export default App;
