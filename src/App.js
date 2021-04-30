import React from 'react';
import './App.css';
import './Phone.css';
import logo from '../src/Asset 4.png'; 
import topLogo from '../src/Asset 5.png'; 
import social from '../src/Asset 6.png';
import { BrowserRouter as Router, Link} from 'react-router-dom'; 
// import AOS from 'aos'; 
// import 'aos/dist/aos.css'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function App() {
  let instagram = "https://www.instagram.com/nimiminds/"; 

  
  return (
    <div className="App">
      <img className="topLogo" src={topLogo} alt=""></img>
   
      <div className="main">
      <Zoom bottom cascade>
       <h1>NimiMinds</h1>
    <h1 className="par"><b>Mindfulness Kit</b></h1>
    </Zoom>
    <LightSpeed cascade>
         <h2>coming soon</h2>
         </LightSpeed>
         <input type="text" placeholder="Be the first one to know. Type your email"></input>
         <Router>
         <Link to="" id="notify-btn">Notify Me!</Link>
         <br />
         <div className="socials">
          <a href={instagram} target="_blank" rel="noreferrer">
           <img className="social" src={social} alt="" ></img>
           </a>
        
        
         <p>Follow us on Instagram!</p>
         </div>
         </Router>
        
        
         
         </div>
         <Fade right>
      <img className="logo" height={750} src={logo} alt=""></img>
      </Fade>
      
    </div>
  );
}

export default App;
