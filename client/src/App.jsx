import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";



function App() {
  return (
    <>
    {/* <Navbar/>
    <Footer/> */}
      {/* <BrowserRouter> */}

        
        <Routes>
          {/* <Route path="" element={<Navbar/>} /> */}
          <Route path="" element={<Home/>} />
         
        </Routes>
        {/* <Footer/> */}
        
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
