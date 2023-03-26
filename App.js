import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './New';
import Home from './Home';
import Test from './Test';
import Nav from './Nav';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/Home"element={<Home/>}></Route>
        <Route path="/New"element={<New/>}></Route>
        <Route path="/Test"element={<Test/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;