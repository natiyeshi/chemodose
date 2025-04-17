import React from "react";
import logoImage from "@/../public/assets/logo/Icon (2).svg"; // Adjust the path to your image file
import Image from "next/image";

const Logo: React.FC = () => {
    return <Image width={40} src={logoImage} alt="Logo" />;
};

export default Logo;
