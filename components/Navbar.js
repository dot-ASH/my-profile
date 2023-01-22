import React from "react";
import Image from "next/image";
import bg from "../public/bg.jpg";

const Navbar = () => {
  return (
    <section id="nav-div">
      <Image src={bg} className="bg-image" alt="bg"></Image>
      {/* <Image src="/bg.jpg" className="bg-image" alt="bg"></Image> */}
      <div className="flex items-center justify-around pt-[1rem] sm:ml-[1rem]">
        {/* left */}
        <div className="flex items-center pl-5 py-6 shrink-0">
          <div className="text-4xl ">
            <p className="uppercase prime-font disable-select smoothed">
              Profile
            </p>
          </div>
        </div>
        {/* middle */}
        <div className=" sm:flex hidden justify-center w-full m-[1rem]">
          <div className="hr-line"></div>
        </div>
        {/* right */}
        <div className="disable-select  flex gap-[0.5rem] sm:gap-[1rem]  items-center sm:mr-[3rem]">
          <p className="about-text lowercase prime-font cursor-pointer underline-effect smoothed text-right">
            about
          </p>
          <p className="font-bold text-2xl lowercase prime-font smoothed text-right">
            ~
          </p>
          <div className="cursor-pointer underline-effect custom-tooltip">
            <p id="customTooltip" className="prime-font  lowercase smoothed">
              portfolio{" "}
            </p>
            <span className="tooltiptext">
              {" "}
              &nbsp; OOPS! you got me there! &nbsp;
              <br /> &nbsp; See ya soon anyway. &nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
