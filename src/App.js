import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Mywork from './components/Mywork';
import Contacts from './components/Contacts';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar'


function App() {


  return (
 
    /*
      -BrowserRouter is used to wrap all the app to enable routing.
      -Router is used within it to define the different routes and their corresponding components.
    */ 
 
      
       <BrowserRouter >

        <NavBar/>
     
      
 
         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/mywork' element={<Mywork/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          
         </Routes>

          <Footer/>
         
      </BrowserRouter>
     
    
  );
}

export default App;
