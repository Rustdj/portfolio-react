import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import AboutMe from './components/aboutMe/aboutMe';
import Expirience from './components/expirience/expirience';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';



function App() {
  return (
      <BrowserRouter>
          <div className='wrapper'>
                <Header/>
                {/* <Content/> */}
                <Sidebar />
            <Routes>
                <Route path='/' element={<Content/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='/expirience' element={<Expirience/>}/>
                <Route path='/home' element={<Content/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    
  );
}



export default App;
