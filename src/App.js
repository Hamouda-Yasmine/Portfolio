import './App.css';
import Home from './components/home/Home';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Mywork from './components/project/Mywork';
import Contacts from './components/contact/Contacts';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar'



function App() {


  return (
 
    /*
      -BrowserRouter is used to wrap all the app to enable routing.
      -Router is used within it to define the different routes and their corresponding components.
    */ 
 
      
       <BrowserRouter >
        
        <NavBar/>
     
        
 
         <Routes>
          <Route exact path='/' element={<Home />}></Route>
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
