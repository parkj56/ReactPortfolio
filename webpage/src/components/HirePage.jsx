import './NavBar.css'
import React from "react"
import emailjs from 'emailjs-com'
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import './HirePage.css';



function HirePage() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ndayg7r', e.target, 'user_Xtw5ze94t1Hp00F0XXSBc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  }  
  
  return(
    <><div class='hire'>
          <ul>
              <li class='list'>
                  <span class='icon'>
                      <NavLink to="/">
                          <ion-icon name="home"></ion-icon>
                      </NavLink>
                  </span>
                  <span class='text'> Home </span>
              </li>

              <li class='list'>
                  <span class='icon'>
                      <NavLink to="/AboutPage">
                          <ion-icon name="accessibility"></ion-icon>
                      </NavLink>
                  </span>
                  <span class='text'> About</span>
              </li>

              <li class='list'>
                  <span class='icon'>
                      <NavLink to="/Media">
                          <ion-icon name="camera-reverse"></ion-icon>
                      </NavLink>
                  </span>
                  <span class='text'> Media </span>
              </li>
          </ul>
      </div>
     
      <div className="container">
              <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group mx-auto">
                          <input type="text" className="form-control" placeholder="Name" name="name" />
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="form-control" placeholder="Email Address" name="email" />
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="form-control" placeholder="Subject" name="subject" />
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                      </div>
                      <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Send Message"></input>
                      </div>
                  </div>
              </form>
          </div></>
    
  )
}
 
export default HirePage;