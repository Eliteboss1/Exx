import React from "react";
import {
  star,
  Discord,
  upArr,
  ball,
  ball2,
  humanRabbit,
  frame,
  Apps,
  Line,
} from "../utils/assets";

const HeroSection = () => {
  return (
    <div>
      <div className="flex gap-4 ">
        <div className=" w-[746px] ">
          <h1 className="text-[82px] font-semibold  ">
            Accelerating web3 in{" "}
            <span className="text-myblue">
              Africa <img src={star} className="inline" />
            </span>
          </h1>

          <p className="pt-2 text-lg font-medium text-mygrey ">
            Through a native independent ecosystem. EXX is a layer 1 blockchain
            for developing user focused DApps and solutions to accelerate web3
            adoption.
          </p>
          <div className="pt-10 flex gap-6">
            <button className="bg-myblue rounded-lg flex w-[306px] gap-2.5 h-14 justify-center items-center shadow-lg">
              {" "}
              <img src={Discord} />
              Join the community
            </button>
            <button className=" border-[1px] border-solid gap-3.5 rounded-lg flex w-[196px] h-14 justify-center items-center">
              Documentation
              <img src={upArr} />
            </button>
          </div>
        </div>
        <div>
          <img src={ball} />
          <img src={humanRabbit} className="pl-36" />
          <img src={ball2} className="ml-[425px] " />
        </div>
      </div>
      <div className="pt-24">
        <img src={frame} />
        <img src={Line} className="pt-[120px]" />
        <img src={Apps} />
      </div>
    </div>
  );
};

export default HeroSection;
