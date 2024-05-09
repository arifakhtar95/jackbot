import React from "react";
import "./Css/style-sheet.css";
import "./Css/responsive.css";
import InnerPageGraphic from "./Images/inner-page-graphic.svg";

const Contact=()=>{ 
    
    return(
        <>
         <div className="waarom-outer">                   
                <div className="container-lg">
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="waarom-inner">
                        <h2><span>Contact</span></h2>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="waarom-inner-img">
                            <img src={InnerPageGraphic} alt=""/>
                        </div>
                    </div>
                </div>
                </div>
          </div>

          <div className="container-lg waarom-row-bottom ">
      <div className="row ">
        <div className="col-lg-7 col-md-6">
        <div className="row">
          <div className="col-12">
            <p className="heb-p">Heb je vragen over JackBot, het handelen in aandelen of andere onderwerpen? Neem dan contact met ons op, wij helpen je graag verder.</p>
            <h3 className="neem-h3">NEEM CONTACT OP</h3>
          </div>            
           
              <div className="col-md-6"> 
                <div className="user_form">
                  {/* <div className="user_field">Naam</div> */}
                  <input name="" type="text" className="input" placeholder="Name"/>
                </div>      
              </div>  
            <div className="col-md-6">
              <div className="user_form">
                {/* <div className="user_field">Telefon</div> */}
               
                <input name="" type="text" className="input" placeholder="Telefon"/>
              </div>  
            </div>   
            <div className="col-md-6">
              <div className="user_form">
                {/* <div className="user_field">Email</div> */}
                
                <input name="" type="email" className="input" placeholder="email"/>
              </div>
            </div>
            <div className="col-12">
              <div className="user_form">
                {/* <div className="user_field">Bericht</div> */}
               
                <input name="" type="text" className="input" placeholder="Bericht"/>
              </div>
            </div>
            <div className="col-12">
              <div className="contact-btn-outer">
                <button><a href="#">VERSTUREN</a></button>
              </div>
            </div>            
        </div>
        </div>

        <div className="col-lg-5 col-md-6">
          <div className="contact-box-outer">
            <h3>STEL JE VRAAG</h3>
            <div className="icons-outer">
              <p><i className="icon-envelope cont_icon"></i>info@jackbot.nl</p>
              <p><i className="fa fa-whatsapp cont_icon"></i>31-(0)6-4630-4314</p>          
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          </div>
        </div>               
      </div>      
    </div>  
        
        
        
        
        
        
        </>

    )
}
export default Contact;