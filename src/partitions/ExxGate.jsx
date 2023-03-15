import React from "react";
import {
  bigStar,
  wallet,
  coins,
  purStar,
  blueStar,
  bagCoins,
} from "../utils/assets";

const ExxGate = () => {
  return (
    <div>
      <div className="text-center ">
        <h3 className="text-lg font-bold text-myblue">THREE EASY STEPS</h3>
        <h1 className="text-5xl font-semibold pt-8">Get started with EXX</h1>
        <p className="text-lg font-medium text-mygrey pt-8 ">
          EXX is your gateway to the future of Web3. Here's our <br />
          recommendation to help you dive right in.
        </p>
      </div>
      <div className="pt-16 flex gap-[70px]">
        <div className="bg-body border-[1px] border-solid border-bl rounded-xl w-[628px] flex items-center justify-center h-[605px] ">
          <div>
            <h1 className="text-[42px] font-semibold">
              Select a wallet <img src={bigStar} className="inline pl-3" />
            </h1>
            <p className="text-[32px] font-normal pt-8 w-[440px] ">
              At this stage, Metamask wallet is most preferable for its
              flexibility and ease of use.
            </p>
          </div>
        </div>

        <div>
          {" "}
          <img src={wallet} />
        </div>
      </div>
      <div className="pt-16 flex gap-[70px] items-center">
        <div>
          {" "}
          <img src={coins} />
        </div>
        <div className="bg-body border-[1px] border-solid border-bl rounded-xl w-[628px] flex items-center justify-center h-[605px] ">
          <div>
            <h1 className="text-[42px] font-semibold">
              Get Exx
              <img src={purStar} className="inline pl-3" />
            </h1>
            <p className="text-[32px] font-normal pt-8 w-[440px] ">
              Claim free Exx testnet tokens by completing simple steps and use.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 flex gap-[70px]">
        <div className="bg-body border-[1px] border-solid border-bl rounded-xl w-[628px] flex items-center justify-center h-[605px] ">
          <div>
            <h1 className="text-[42px] font-semibold">
              Make a transaction
              <img src={blueStar} className="inline pl-3" />
            </h1>
            <p className="text-[32px] font-normal pt-8 w-[440px] ">
              Perform your first transaction on Exx test network and see how it
              feels flying.
            </p>
          </div>
        </div>

        <div>
          {" "}
          <img src={bagCoins} />
        </div>
      </div>
    </div>
  );
};

export default ExxGate;
