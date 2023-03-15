import React from "react";
import { navLogo, downArr, upArr } from "../utils/assets";

const Navigation = () => {
  return (
    <div>
      {/* wrapper */}
      <div className="flex ">
        {/* logo */}
        <div>
          <img src={navLogo} />
        </div>
        {/* menuitems */}
        <div className=" pl-36 flex   items-center ">
          <ul className="flex gap-20 cursor-pointer   text-sm font-normal">
            <li className="flex">
              About <img src={downArr} className="pl-3.5" />
            </li>

            <li className="flex">
              Users <img src={downArr} className="pl-3.5" />
            </li>

            <li className="flex">
              Developers <img src={downArr} className="pl-3.5" />
            </li>

            <li className="flex">
              Investors <img src={downArr} className="pl-3.5" />
            </li>
            <li className="flex">
              Support <img src={downArr} className="pl-3.5" />
            </li>
          </ul>
        </div>
        <div className="h-12 w-40 ml-36 flex justify-center  bg-myblue rounded-lg">
          <button className="flex items-center ">
            Explore <img src={upArr} className="pl-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
