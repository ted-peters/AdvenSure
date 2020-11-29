import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <StyledFooter sticky="bottom">
            <div style={{ float: "left" }}>© 2020 Copyright: Advensure</div>
            <div style={{ float: "right", marginLeft: "auto" }}>
                <Link to="/">Profile</Link> <Link to="/">Signout</Link>
            </div>
        </StyledFooter>
    );
};

export default Footer;
