import React from "react";
import "./Css/style-sheet.css";
import "./Css/responsive.css";
import logoBottom from "./Images/Logo-bottom.png";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
                    <div className="footer">
            <div className="container">
                <div className="row footer-row-top  ">
                <div className="col-lg-5 col-md-6 col-sm-8  ">
                    <div className="footer-jackbot">          
                    <img src={logoBottom} alt=""/>
                    <p>Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-4  ">
                    <div className="footer-about res-about">
                    <h4>Abouts</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Term of service</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                    </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-8 ">
                    <div className="footer-element">
                    <h4>Elements</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Term of service</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                    </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-4  res-element">
                    <div className="footer-element">
                    <h4>Elements</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Term of service</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="copy-right">
                <p>@ Copyright 2020. All Rights Reserved</p>
                </div>
                <div className="social-icon">
                <Link to="/"><i className="icon-social-facebook  fLink fa-facebook"></i> </Link>
                <Link to="/"><i className="icon-social-twitter fLink fa-twitter"></i> </Link>
                <Link to="/"><i className="icon-social-linkedin fLink fa-linkedin"></i> </Link>
                </div>
                

            </div>

            </div>
        
        
        </>


    )
}
export default Footer;