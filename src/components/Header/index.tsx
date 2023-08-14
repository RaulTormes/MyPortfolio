import React from "react";
import Image from "next/image";
import webDeveloper from "../../assets/Web Developer.png";

const Header = () => {
  return (
    <div>
      <p>
        RaulTormes&nbsp;
        <Image src={webDeveloper} alt="logo" />
      </p>
    </div>
  );
};

export default Header;
