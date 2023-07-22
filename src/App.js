
import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Mywork from './components/Mywork';
import Contacts from './components/Contacts';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [activeRoute,setActiveRoute]=useState();

  useEffect(()=>{
    const path=window.location.pathname;
    setActiveRoute(path.slice(1,path.length));
  },[]);
  return (
 
    /*
      -BrowserRouter is used to wrap all the app to enable routing.
      -Router is used within it to define the different routes and their corresponding components.
    */ 
 
      
       <BrowserRouter>
       <nav className='m-1 p-1 border border-info navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='nav na-pills'>
         
          <li>
          <Link to="/" onClick={()=>setActiveRoute("")} className={activeRoute==""?'btn btn-info m-1 ':'btn btn-outline-info  m-1'}> Home</Link>
          </li>
          <li>
          <Link to="/education" onClick={()=>setActiveRoute("education")} className={activeRoute=="education"?'btn btn-info m-1 ':'btn btn-outline-info  m-1'}> Education</Link>
          </li>
          <li>
          <Link to="/skills" onClick={()=>setActiveRoute("skills")}className={activeRoute=="skills"?'btn btn-info m-1 ':'btn btn-outline-info  m-1'}> skills</Link>
          </li>
          <li>
          <Link to="/mywork" onClick={()=>setActiveRoute("mywork")} className={activeRoute=="mywork"?'btn btn-info m-1 ':'btn btn-outline-info  m-1'}> My Work</Link>
          </li>
          <li>
          <Link to="/contacts" onClick={()=>setActiveRoute("contacts")} className={activeRoute=="contacts"?'btn btn-info m-1 ':'btn btn-outline-info  m-1'}> Contacts</Link>
          </li>
        </ul>
       

       </nav>
     
 
         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/mywork' element={<Mywork/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
         </Routes>

      </BrowserRouter>
     
    
  );
}

export default App;
