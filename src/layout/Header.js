import React from "react";
import image from "../assets/images/index";

function Header() {
  return (
    <header className={`fixed top-0 left-0`}>
      <div className="header-content">
        <div className={`logo`}>
          <img src={image["WeGo4ITLogo"]} alt="WeGo4IT Logo" />
        </div>
        <div className={`header-slogan`}>
          <p>Vietnam, your offshore software development destination</p>
        </div>
        <div className={`header-language-login`}>
          {/* <Dropdown /> */}
          {/* <button className="login-button">Login</button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
