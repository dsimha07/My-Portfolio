// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/poppins';
import { useEffect} from "react";


import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import MyProjects from "./Components/MyProjects";
import Contacts from "./Components/Contacts";


function App() {
  useEffect(() => {
    AOS.init({ once: true }); // only animates once when scrolled into view
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <MyProjects />
      <Contacts />
    </div>
    
     
  )
}

export default App;
