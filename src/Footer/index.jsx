import React from "react";
import { navLogo, rectangle, line2, At } from "../utils/assets";

const Footer = () => {
  return (
    <div className="bg-footerbg   ">
      <div className="flex justify-between px-[72px] pt-12">
        <div>
          {" "}
          <img src={navLogo} />
          <p className="text-base font-normal text-mygrey pt-3 w-[330px]">
            The architecture for accelerating global web3 adoption.
          </p>
        </div>
        <div>
          <h1 className=" text-lg font-bold">
            <img src={rectangle} className="inline pr-2.5" />
            General
          </h1>
          <ul className="text-footerwhite text-lg font-normal flex flex-col gap-8 pt-7">
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div>
          {" "}
          <h1 className=" text-lg font-bold">
            {" "}
            <img src={rectangle} className="inline pr-2.5" />
            SIGN UP FOR EMAIL UPDATES
          </h1>
          <div className="h-[52px] relative pt-8">
            <input
              className="border-none outline-none  rounded-xl h-[52px] font-normal text-xs w-[510px] pl-2 relative  bg-inputbg"
              type="text"
              placeholder="Your email address"
            ></input>
            <button className="bg-myblue rounded-xl h-[52px] text-lg font-bold w-[186px] absolute right-[0.1px]  ">
              subscribe
            </button>
            <h3 className="text-emailcolor text-base font-normal pt-5">
              Sign up with your email address to receive news and updates
            </h3>
          </div>
        </div>
      </div>
      <div className="pt-20 flex justify-center">
        <img src={line2} />
      </div>
      <div className="flex pt-5  text-footerwhite  justify-center font-normal text-base">
        <h1 className=" ">Copyright</h1>
        <img src={At} className="pl-2" />
        <h1 className=" pl-2"> 2023 Timie. All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
