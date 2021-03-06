import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav/index';
import About from './pages/about/index'; 
import Services from './pages/services/index'; 
import Contact from './pages/contact/index'; 
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <div className='container-fluid p-0 backgroundImg'>
    <Fade ><About/></Fade>
    <Fade ><Services/></Fade>
    <Fade ><Contact/></Fade>
    </div>
    </BrowserRouter>
  );
}

export default App;
