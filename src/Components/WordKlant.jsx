import React from "react";
import "./Css/style-sheet.css";
import "./Css/responsive.css";
import InnerPageGraphic from "./Images/inner-page-graphic.svg";

const WordKlank=()=>{
    return(
        <>
            <div className="waarom-outer">                   
                <div className="container-lg">
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="waarom-inner">
                            <h2>Word <span>Klant</span></h2>
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
          <div className="container-lg">
                <div className="row waarom-row-bottom">
                <div className="col-12">
                    <div className="klant-content-info">
                    <p>Blijf op de hoogte en krijg als eerste exclusief toegang tot het platform tegen een gereduceerd tarief, het aantal plaatsen is beperkt. Schrijf je hieronder in.</p>
                    </div>
                    
                    <div className="subscriber-bg  klank-subscriber-bg">
                    <div className="subscriber-inner">
                        <h3>We always try to be as close to you as possible</h3>
                        <div className="search-box">
                        <input type="email" placeholder="Enter Your Email Address"/>
                        <button>Subscribe Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>



        </>
    )
}

export default WordKlank;

