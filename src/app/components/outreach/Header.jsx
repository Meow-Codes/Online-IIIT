import React from "react";
import Image from "next/image";
import logo from "../../assets/dsai/iiit-Logo.svg";
const OutreachHeader = () => {
  return (
    <div className="bg-white h-20">
      <div className="w-full mx-auto max-w-7xl p-2.5 flex justify-between items-center">
        <a href="/">
        <div className="flex justify-start items-center">
          <Image src={logo} alt="logo" width={200} height={150} />
        </div>
        </a>
      </div>
    </div>
  );
};

export default OutreachHeader;
