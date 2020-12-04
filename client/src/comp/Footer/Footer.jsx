import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div> Visit us on social media! 
                <a href="https://www.facebook.com"><i class="fab fa-facebook" style={{color: '#E8C564', marginLeft:'10px', marginRight:"5px",fontSize:'25px'}}></i></a>
                <a href="https://www.twitter.com"><i class="fab fa-twitter"style={{color: 'darkblue',marginRight:'5px', fontSize:'25px'}}></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"style={{marginRight: '5px', color: '#E8C564',fontSize:'25px'}}></i></a>
                <a href="https://www.youtube.com"><i class="fab fa-youtube"style={{color: 'darkblue', fontSize:'25px'}}></i></a>
            </div>
        </div>
    );
};

export default Footer;
