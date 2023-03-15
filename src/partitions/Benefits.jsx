import React from "react";
import { upArr, cirleArr, Discord } from "../utils/assets";

const Benefits = () => {
  return (
    <div>
      <div className="flex gap-16">
        <div className="w-[636px]">
          <h3 className="text-myblue font-bold text-lg">Benefits</h3>
          <h1 className="text-5xl font-semibold pt-3.5">
            Join the open economy of the future
          </h1>
          <p className="text-mygrey text-lg font-normal pt-9">
            We are on a mission to accelerate web3 adoption through quality
            participation and engagement of talents for purposeful service in
            the web3 space.
          </p>
          <div className="h-12 w-48 flex mt-9 justify-center bg-myblue rounded-lg">
            <button className="flex items-center  text-white ">
              Build Now
              <img src={upArr} className="pl-3.5" />
            </button>
          </div>
        </div>
        <div>
          <div className="pt-10">
            <h1 className="text-[28px] font-semibold">
              <img src={cirleArr} className="inline pr-3" />
              Run a validator
            </h1>
            <p className="w-[549px] text-lg font-normal pt-2 pl-12">
              Help secure our blockchain from internal and external attacks and
              approve transactions
            </p>
          </div>
          <div className="pt-8">
            <h1 className="text-[28px] font-semibold">
              <img src={cirleArr} className="inline pr-3" />
              Use a Dapp
            </h1>
            <p className="w-[549px] text-lg font-normal pt-2 pl-12">
              Explore the ecosystem dApps and start using decentralised
              applications with 'useful cases'
            </p>
          </div>
          <div className="pt-8">
            <h1 className="text-[28px] font-semibold">
              <img src={cirleArr} className="inline pr-3" />
              Mint a Token
            </h1>
            <p className="w-[549px] text-lg font-normal pt-2 pl-12">
              Flex yourself by deploying a token on the Exx network without
              writing any line of code.
            </p>
          </div>
          <div className="pt-8">
            <h1 className="text-[28px] font-semibold">
              <img src={cirleArr} className="inline pr-3" />
              Start Building
            </h1>
            <p className="w-[549px] text-lg font-normal pt-2 pl-12">
              Build application with 'useful cases' and web2 experience with
              focus on user experience
            </p>
          </div>
        </div>
      </div>
      <div className="pt-52 flex justify-center">
        <div className="bg-mixed flex  justify-center items-center gap-28 border-[1px] border-secondgrey rounded-lg w-[1080px] h-[267px]">
          <div className="w-[595px]">
            <h1 className="text-[42px] font-semibold">
              Join thousands of other
            </h1>
            <span className="text-myblue ">Exx</span> enthusiasts.
            <p className="text-base font-normal text-mygrey pt-3">
              Our community is made of up investors, developers, advisors,
              creators, designers and a host of others working to make web3
              mainstream.
            </p>
          </div>
          <div>
            <button className="bg-myblue rounded-lg flex w-[306px] gap-2.5 h-14 justify-center items-center shadow-lg">
              <img src={Discord} />
              Join the community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
