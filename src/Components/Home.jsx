import React from "react";
import "./Css/style-sheet.css";
import Dage from "./Images/Dage.png";
import Bepaal from "./Images/Bepaal.png";
import Klantenservice  from "./Images/Klantenservice.png";
import aboutr from "./Images/about-r.png";
import TestimonialIcon from "./Images/tstmnl-icon.png";
import JackbotWork from "./Images/jackbot-work.png";

const Home=()=>{
    return(
       <>
       <div className="background-colour-home-page">
        <div className=" container-xxl no-padding ">
            <div className="banner-image">   
          <div className="container-xl ">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
              <div className="banner_col1">
                <h2>Aandelen - Automatisch Analyseren!</h2>
                <p>Wij scannen dagelijks 10 000 aandelen en maken een selectie op basis van jouw interesses. S&P 500 en EuroNext of juist de Bitcoin en Altcoins?</p>
                <div className="d-flex banner_buttons">
                  <button className="btn bnr_btn bnr_btn2" type="button"><a href="/">Get Started</a></button>
                  <button className="btn bnr_btn bnr_btn1" type="button"><a href="/">View Pricing</a></button>
                </div>
              </div> 
        </div>
        </div>

        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12  ">

            {/* <div className="banner_col2">
            <img src="assets/dist/images/banner-background-logo.png">
            </div> */}
            <div className="banner_col2">
            {/* <img src="assets/dist/svg/header%20bot.svg"> */}
            </div>
        </div>
        </div>

        </div>
        </div>

        </div>

        <div className="container-lg three-colum-bottom">
  <h4 className="after-banner-h4">Laat ons jou helpen
    <span><abbr> eenvoudig aandelen</abbr> te selecteren</span></h4>   
  <div className="row">
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6  ">
      <div className="dage-content">
        <img src={Dage} alt=""/>
        <h3>
          <span>
            <abbr> Dagelijks </abbr> de beste ideeën
          </span>            
        </h3>
        <p>Wij scannen dagelijks meer dan 10 000 aandelen om voor jou de beste kansen te vinden!</p>
      </div>
    </div>

    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6  ">
      <div className="bepaal-content">
        <img src={Bepaal} alt=""/>
        <h3>
          <span>
            <abbr> Bepaal zelf </abbr>wat je wil ontvangen
          </span>           
        </h3>
        <p>Alleen geïnteresseerd in de technologie aandelen of wil je beperken tot de S&P 500, jij bepaalt!</p>
      </div>
    </div>

    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6  ">
      <div className="klanten-content">
        <img src={Klantenservice} alt=""/>
        <h3>
          <span>
            <abbr> Klantense</abbr>rvice
          </span>
        </h3>
        <p>Vragen over het platform? Wij staan voor je klaar om te helpen!</p>
      </div>
    </div>
  </div>
</div>

<div className="section-about">
  <div className="container-lg">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
        <div className="about-image">
          <img src={aboutr} alt=""/>
        </div>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
        <div className="about-content">
          <h3>About Us</h3>
          <span>What is A <abbr >JackBot</abbr></span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <p>Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          <h4>Lizzie Rose <span>Business Adcisor</span></h4>
          <button type="button"><a href="/">View More</a></button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-lg">

  <h3 className="jackbot-work">What We Do
  <span> How Does <abbr> JackBot Work</abbr> </span></h3>

  <div className="row ">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="row">
        <div className="col-2">
          <div className="jackbot-icon">
            <i className="icon-speech speech fa fa-speech"></i>
          </div>
        </div>
        <div className="col-10  ">
          <div className="jackbot-content">
            <h4>Create jackbot Chatbot</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2  ">
          <div className="jackbot-icon">
            <i className="icon-settings settings"></i>
          </div>
        </div>
        <div className="col-10  ">
          <div className="jackbot-content">
            <h4>Build Your Work</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2  ">
          <div className="jackbot-icon">
            <i className="icon-briefcase "></i>
          </div>
        </div>
        <div className="col-10  ">
          <div className="jackbot-content">
            <h4>Artificial Intelligence</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="jackbot-image-section">
        <img src={JackbotWork} alt=""/>
      </div>
    </div>
  </div>
</div>
<div className="testimonial-outer">
  <div className="container-lg">
    <div className="testimonial-banner">
      <div className="row testimonial-inner-content">
        <h3>Testimonials <span> Our <abbr>Customers</abbr> Say </span> </h3>
        <div className="col-md-7 testimonial-main-content">
          <img src={TestimonialIcon} alt=""/>
          <p>The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy. The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy</p>
          <h4>Kita Chihoko, <span>CEO</span> </h4>      
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-lg ">
  <div className="row justify-content-center">
    <div className="col-md-10  ">
      <div className="subscriber-bg ">
        <div className="subscriber-inner">
          <h3>We always try to be as close to you as possible</h3>
          <div className="search-box">
            <input type="email" placeholder="Enter Your Email Address"/>
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <div className="meer-dan-content">
        <h3>Meer dan 10,000 <span> verschillende </span> assets!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <button type="button"> <a href="/">BEKIJK ONZE SELECTIE</a></button>
      </div>

    </div>
  </div>
</div>


  </>

  );
}
export default Home;