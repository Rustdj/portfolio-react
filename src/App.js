import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import AboutMe from './components/aboutMe/aboutMe';
import Experience from './components/experience/experience';
import Skills from './components/skills/skills';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Portfolio from './components/portfolio/portfolio';
import Contacts from './components/contacts/contacts';



function App() {
  return (
      <BrowserRouter>
          <div className='wrapper'>
                <Header/>
                {/* <Content/> */}
                <Sidebar />
            <Routes>
                <Route path='/' element={<Content/>} />
                <Route path='/about' element={<AboutMe/>} />
                <Route path='/experience' element={<Experience/>} />
                <Route path='/home' element={<Content/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contacts' element={<Contacts/>} />
            </Routes>
        </div>
      </BrowserRouter>
    
  );
}



export default App;
