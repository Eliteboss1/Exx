import React from "react";
import { Chart } from "../utils/assets";

const Developers = () => {
  return (
    <div className="flex   gap-[88px]">
      <div className="w-[800px]">
        <h3 className="text-lg text-myblue font-bold">DEVELOPER FRINEDLY</h3>
        <h1 className="text-5xl font-semibold pt-12 ">Excel with EXX</h1>
        <p className="text-lg  font-normal text-mygrey pt-12">
          Exx builds on the efficiencies of Ethereum Virtual Machine whilst
          offering low fees, fast speeds, and a better user and developer
          experience without compromising on the blockchain security. A basic
          knowledge of Ethereum sets you on to building on Exx.
        </p>
      </div>
      <div>
        <img src={Chart} />
      </div>
    </div>
  );
};

export default Developers;
