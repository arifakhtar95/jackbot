import React from "react";
import "./Css/style-sheet.css";
import "./Css/responsive.css";
import logo from "./Images/logo.png";
import popup from "./Images/popup.png"
import { Link } from "react-router-dom";
const Nav=()=>{
  const ChangeColor=(cls)=>{
    if(cls==='home'){ 
      document.getElementById('home').style.color="#36e0a0";  
      document.getElementById('waarom').style.color ="";  
      document.getElementById('wordklank').style.color ="";
      document.getElementById('kennisbank').style.color ="";
      document.getElementById('contact').style.color=""; 
      document.getElementById('home').classList.remove('active-2');
    }else if(cls==='waarom'){
     
      document.getElementById('waarom').style.color ="#36e0a0";
      document.getElementById('home').style.color="";  
      document.getElementById('wordklank').style.color ="";
      document.getElementById('kennisbank').style.color ="";
      document.getElementById('contact').style.color=""; 
      document.getElementById('home').classList.remove('active-2');
    }else if(cls==='wordklank'){
      document.getElementById('wordklank').style.color ="#36e0a0";
      document.getElementById('waarom').style.color ="";    
      document.getElementById('home').style.color=""; 
      document.getElementById('kennisbank').style.color ="";
      document.getElementById('contact').style.color=""; 
      document.getElementById('home').classList.remove('active-2');

    }else if(cls==='kennisbank'){
      document.getElementById('kennisbank').style.color ="#36e0a0";
      document.getElementById('wordklank').style.color ="";
      document.getElementById('waarom').style.color ="";
      document.getElementById('home').style.color=""; 
      document.getElementById('contact').style.color=""; 
      document.getElementById('home').classList.remove('active-2');

    }else if(cls==='contact'){
      document.getElementById('contact').style.color ="#36e0a0";
      document.getElementById('kennisbank').style.color ="";
      document.getElementById('wordklank').style.color ="";
      document.getElementById('waarom').style.color ="";
      document.getElementById('home').style.color=""; 
      document.getElementById('home').classList.remove('active-2');
    }else{
      // document.getElementById('contact').style.color ="";
      // document.getElementById('kennisbank').style.color ="";
      // document.getElementById('wordklank').style.color ="";
      // document.getElementById('waarom').style.color ="";
      // document.getElementById('home').style.color="#36e0a0"; 
      // document.getElementById('home').classList.remove('active-2');
   
    }
  }
  // const reload=()=>{    
  //  document.getElementById('home').click();
  // }

  var toTop = document.getElementById("toTop");
  window.onscroll = function() {myFunction()};
  function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  }
  const totop=()=>{ 
  window.scrollTo(0,-50000);
  }
  window.addEventListener("scroll", e => {
  toTop = document.getElementById("toTop");
  toTop.style.display = window.scrollY > 100 ? "block" : "none";
  })
    return(
        <>
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>
          <div className="container-md px-0">
            <nav className="navbar navbar-expand-xl navbar-light  show">
          <div className="container-lg ">
            <Link className="navbar-brand" to="#">
                <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler nav-icon-backg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link className="nav-link active-2"   id="home"  onClick={()=>{ChangeColor('home')}}  to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="waarom" onClick={()=>{ChangeColor('waarom')}}  to="/waarom">Waarom Jackbot?</Link>
                </li>      
                <li className="nav-item">
                  <Link className="nav-link" id="wordklank" onClick={()=>{ChangeColor('wordklank')}}  to="/wordklank">Word Klant</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="kennisbank" onClick={()=>{ChangeColor('kennisbank')}} to="/kennisbank">Kennisbank</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="contact" onClick={()=>{ChangeColor('contact')}} to="/contact">Contact</Link>
                </li>
              </ul>                         
                <button type="button" className="btn-1"> <Link id="home"  onClick={()=>{ChangeColor('home')}}  to="">Pricing</Link></button>
                <button type="button" className="btn-2"> <Link id="home"  onClick={()=>{ChangeColor('home')}}  to="" >Get Start</Link></button>                        
            </div>
          </div>
        </nav>
        <div id="toTop" className="btn-top" onClick={()=>{totop()}}>
          <img src={popup} alt="" />
        </div>
  </div>

        </>
    )
}
export default Nav;