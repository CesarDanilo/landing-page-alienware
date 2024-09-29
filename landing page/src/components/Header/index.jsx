import React from "react";
import alienwareLogo from '../../assets/img/Alienware-Logo.png';

const Header = () => {
    return (
        <>
            <header>
                <img src={alienwareLogo} alt="Alienware Logo" />
            </header>
        </>
    );
};

export default Header;
