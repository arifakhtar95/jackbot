import React from "react";
import "./Css/style-sheet.css";
import "./Css/responsive.css";
import InnerPageGraphic from "./Images/inner-page-graphic.svg";
import WaaromJacbotOne from "./Images/waarom-jackbot1.png";
import WaaromJackbottwo from "./Images/waarom-jackbot2.png";

const Waarom=()=>{
        return(
            <>
                <div className="waarom-outer">                   
                    <div className="container-lg">
                    <div className="row">
                        <div className="col-md-7 ">
                            <div className="waarom-inner">
                                <h2>Waarom Ja<span>ckbot?</span></h2>
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
                        <div className="col-md-6">
                            <div className="waarom-image-section-1">
                                <img src={WaaromJackbottwo} alt=""/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="waarom-image-section-1-content">
                                <h3>Waarom JackBot?</h3>
                                <p>Of je nu al jaren aan het beleggen bent of net begint, je zult ongetwijfeld ervaren hebben hoeveel aantrekkelijke kansen er dagelijks voorbij komen en hoe lastig het kan zijn om emoties uit te schakelen tijdens het handelen. Bovendien zou je overal wel een positie in willen nemen, maar dat is gewoonweg niet mogelijk.</p>
                                <p>JackBot verzamelt en analyseert bestaande data uitgebreid en efficiënt en kan op basis van de resultaten een helpende hand bieden bij het maken van beslissingen, en het vinden van die speld in die hooiberg.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="waarom-image-section-1-content">
                                <h3>Waarom JackBot?</h3>
                                <p>Of je nu al jaren aan het beleggen bent of net begint, je zult ongetwijfeld ervaren hebben hoeveel aantrekkelijke kansen er dagelijks voorbij komen en hoe lastig het kan zijn om emoties uit te schakelen tijdens het handelen. Bovendien zou je overal wel een positie in willen nemen, maar dat is gewoonweg niet mogelijk.</p>
                                <p>JackBot verzamelt en analyseert bestaande data uitgebreid en efficiënt en kan op basis van de resultaten een helpende hand bieden bij het maken van beslissingen, en het vinden van die speld in die hooiberg.</p>
                            </div>               
                        </div>

                        <div className="col-md-6">
                            <div className="waarom-image-section-1">
                                <img src={WaaromJacbotOne} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            


            
            
            </>
        )
}
export default Waarom;