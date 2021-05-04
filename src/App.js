import React from 'react';
import './App.css';
import './Phone.css';
import logo from '../src/Asset 4.png'; 
import topLogo from '../src/Asset 5.png'; 
import social from '../src/Asset 6.png';
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import AOS from 'aos'; 
// import 'aos/dist/aos.css'
import Zoom from 'react-reveal/Zoom';


const CustomForm = ({status, message, onValidated}) => {
  let email; 
  const submit = () => 
    email && 
    email.value.indexOf("@") >  -1 && onValidated({EMAIL: email.value});
    return (
      <div>
        {status === "sending" && <div>sending....</div>}
        {status === "error" && (
          <div style={{color: 'red'}} dangerouslySetInnerHTML={{__html: message}} />
        )}

        {status === "success" && (
          <div className="success" style={{color: '#18397c'}} dangerouslySetInnerHTML={{__html: message}} />
        )}
        <input type="email" placeholder="Be the first one to know. Type your email" ref={node => (email = node)} />
        <button onClick={submit}>Notify Me!</button>
        
        </div>
       
    );
}

function App() {
  let instagram = "https://www.instagram.com/nimiminds/"; 
  const mailchimp = 'https://nimiminds.us1.list-manage.com/subscribe/post?u=7bf065696248ba67881c08fb6&amp;id=035619dd6f'; 

  
  return (
    <div className="App">
      <img className="topLogo" src={topLogo} alt=""></img>
   
      <div className="main">
      <Zoom bottom cascade>
       <h1>NimiMinds</h1>
    <h1 className="par"><b>Mindfulness Kit</b></h1>
    </Zoom>
    <Zoom bottom cascade>
         <h2>coming soon</h2>
         </Zoom>
         
        {/* <Router> */}
        {/* <Link to="" id="notify-btn" onClick={submit}>Notify Me!</Link> */}
         <MailchimpSubscribe url={mailchimp} render={({subscribe, status, message}) => (
           <CustomForm status={status} message={message} onValidated={FormData => subscribe(FormData)} />
         )}  />
         <br />
         <div className="socials">
          <a href={instagram} target="_blank" rel="noreferrer">
           <img className="social" src={social} alt="" ></img>
           </a>
        
        
         <p>Follow us on Instagram</p>
         </div>
         {/* </Router> */}
        
        
         
         </div>
         <Zoom bottom cascade>
      <img className="logo" height={750} src={logo} alt=""></img>
      </Zoom>
      
    </div>
  );
}

export default App;
