import React from "react";
import "./Css/style-sheet.css";
import "./Css/responsive.css";
import InnerPageGraphic from "./Images/inner-page-graphic.svg";
import { Link } from "react-router-dom";

const Kennisbank=()=>{
    return(
        <>
            <div className="waarom-outer">                   
                <div className="container-lg">
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="waarom-inner">
                        <h2>Ken<span>nisbank</span></h2>
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
      <div className="row  justify-content-center">
        <div className="col-md-12">
          <div className="kennisbank-content">
            <h3>Vragen over <span><abbr> beleggen?</abbr></span> Doorzoek onze kennisbank.</h3> 

            <div className="zoeken-content">
              <input type="email" placeholder="Jouw vraag"/>
              <button><Link to="/">Zoeken</Link></button>
            </div>
            <p>Alle artikelen</p>
          </div>
        </div>          
      </div>
      <div className="row">
        <div className="col-12">
          <div className="bekeken-content">
            <h3>Andere beleggers bekeken:</h3>
          </div> 
        </div>
        <div className="col-md-6">
          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTOne" aria-expanded="false" aria-controls="collapseTOne">
                  Wat is spread?
                </button>
              </h2>
              <div id="collapseTOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 


          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTTwo" aria-expanded="false" aria-controls="collapseTTwo">
                  Bull of Bear market
                </button>
              </h2>
              <div id="collapseTTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 

          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTThree" aria-expanded="false" aria-controls="collapseTThree">
                  Is beleggen Christelijk?
                </button>
              </h2>
              <div id="collapseTThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 

          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTFour" aria-expanded="false" aria-controls="collapseTFour">
                  Is beleggen Christelijk?
                </button>
              </h2>
              <div id="collapseTFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div>      
        </div>

        <div className="col-md-6">
          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTFive" aria-expanded="false" aria-controls="collapseTFive">
                  Beleggen in cyclische aandelen
                </button>
              </h2>
              <div id="collapseTFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 


          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTSix" aria-expanded="false" aria-controls="collapseTSix">
                  Beleggen in cyclische aandelen
                </button>
              </h2>
              <div id="collapseTSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 

          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTSeven" aria-expanded="false" aria-controls="collapseTSeven">
                  Home bias of home country bias
                </button>
              </h2>
              <div id="collapseTSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 

          <div className="accordion accordion-space" id="accordionExample">             
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button accordion-button-outer collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTEight" aria-expanded="false" aria-controls="collapseTEight">
                  Is beleggen Christelijk?
                </button>
              </h2>
              <div id="collapseTEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="accordion-body-inner-content">
                    <p>Bij beleggen is een spread het verschil tussen de 'bid'- en 'ask'-prijs van een effect. De spread wordt veroorzaakt door een aantal factoren:</p>
                    <ul>
                        <li>het aanbod, oftewel het totaal aantal effecten wat beschikbaar is om te verhandelen;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect;</li>
                        <li>de vraag, de hoeveelheid interesse in een bepaald effect; de handelsactiviteit rondom een effect; hoe hoger deze activiteit hoe kleiner de spread vaak is.</li>
                    </ul>
                    <p>Indien we opties handelen, dan wordt de spread veroorzaakt door het verschil tussen de 'strike price' en de huidige marktwaarde.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div> 
        </div>
      </div>
    </div>  



        </>
    )
}
export default Kennisbank;