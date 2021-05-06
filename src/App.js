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
import swal from 'sweetalert'; 



const CustomForm = ({status, message, onValidated}) => {
 
  let email; 
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const submit = () => {
    email && 
    email.value.indexOf("@") >  -1 && onValidated({EMAIL: email.value});
   
      if (email.value === '') { // checks if the email address field is empty 
       swal({
         title: 'ERROR', 
         text: "Please enter email address", 
         icon: 'error',
         dangerMode: true
       });
      }
      // checks if the email address is in proper format
     else if (!regex.test(email.value)) {
      swal({
        title: 'ERROR', 
        text: "Please enter valid email address", 
        icon: 'warning', 
        dangerMode: true
      });
     }
  }

  

    return (
      <div>
        {status === "sending" && <div>sending....</div>}
        {status === "error" && (
         alert("please enter valid email address")
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
         <h2>Coming soon</h2>
         </Zoom>
         
         <MailchimpSubscribe url={mailchimp} render={({subscribe, status, message}) => (
           <CustomForm status={status} message={message} onValidated={FormData => subscribe(FormData)} />
         )}  />
         <br />
         <div className="socials">
          <a href={instagram} target="_blank" rel="noreferrer">
           <img className="social" src={social} alt="" ></img>
          
           </a>
           <a href={instagram} target="_blank" rel="noreferrer">
           <p>Follow us on Instagram</p>
           </a>
        
        
        
       
         </div>

        
        
         <Zoom bottom cascade>
           <div className="image">
      <img className="logo" height={710} src={logo} alt="" />
      </div>
      </Zoom>
     
         </div>
      
      
    </div>
  );
}

export default App;
