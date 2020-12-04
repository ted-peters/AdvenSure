import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div> 
                <a href="https://www.facebook.com"><i class="fab fa-facebook" style={{color: 'darkblue', marginLeft:'10px', marginRight:"20px",fontSize:'25px'}}></i></a>
                <a href="https://www.twitter.com"><i class="fab fa-twitter"style={{color: 'darkblue',marginRight:'20px', fontSize:'25px'}}></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"style={{marginRight: '20px', color: 'darkblue',fontSize:'25px'}}></i></a>
                <a href="https://www.youtube.com"><i class="fab fa-youtube"style={{color: 'darkblue', fontSize:'25px'}}></i></a>
            </div>
        </div>
    );
};

export default Footer;
