import React from "react";
import alienwareLogo from '../../assets/img/Alienware-Logo.png';

const Header = () => {
    return (
        <>
            <header className="flex justify-center align-middle items-start h-44 w-96 mb-28">
                <img src={alienwareLogo} alt="Alienware Logo" className="object-contain w-full " />
            </header>
        </>

    );
};

export default Header;
