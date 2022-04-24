import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import CreateNews from './components/CreateNews';
import News from './components/News';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route  path='/' element={<Home />} />
          <Route path='/create' element={<CreateNews />} />
          <Route path='/news' element={<News />} />


        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App;