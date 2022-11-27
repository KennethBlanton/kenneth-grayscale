
import React from "react";
import "../../scss/nav.scss"

const Nav = ({refresh}) => {
    return (
        <div className="nav">
            <div className="nav-inner">
                <p onClick={refresh}>RefreshListings</p>
                <a href="https://github.com/KennethBlanton/kenneth-grayscale" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
        </div>
    )
};

export default Nav