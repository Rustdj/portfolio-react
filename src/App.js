import './App.css';
//import { animated, useTransition } from 'react-spring'
import Header from './components/header/header';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import AboutMe from './components/aboutMe/aboutMe';
import Experience from './components/experience/experience';
import Skills from './components/skills/skills';
import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Portfolio from './components/portfolio/portfolio';
import Contacts from './components/contacts/contacts';
import Github from './components/github/github';




function App() {
    // const location = useLocation();
    
    // const transitions = useTransition(location, {
    //     from: {
    //         opacity: 0,
    //         transform: 'translateX(100%)',
    //     },
    //     enter: {
    //         opacity: 1,
    //         transform: 'translateX(0%)',
    //     },
    //     leave: {
    //         opacity: 0,
    //         transform: 'translateX(-100%)',
    //     },
        
    // });

  return (
      <>
          <div className='wrapper'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Content/>} />
                    <Route path='/about' element={<AboutMe/>} />
                    <Route path='/experience' element={<Experience/>} />
                    <Route path='/home' element={<Content/>} />
                    <Route path='/skills' element={<Skills/>} />
                    <Route path='/portfolio' element={<Portfolio/>} />
                    <Route path='/contacts' element={<Contacts/>} />
                    <Route path='/https://github.com/' element={<Github/>} />
                </Routes>
                {/* <Content/> */}
                <Sidebar />
            
        </div>
      </>
    
  );
}



export default App;
