import React from "react";

const BuyXVToken = () => {
  const cardsData = [
    {
      source: "../public/images/Create a Wallet.png",
      title: "Create a Wallet",
      description: [
        "Download Metamask App or any wallet",
        "Download the Google chrome extension",
      ],
    },
    {
      source: "../public/images/Get ETHBNB.png",
      title: "Get ETH/BNB",
      description: [
        "Have ETH or BNB in your wallet to swap to $XV",
        "If you don’t have any ETH, you can buy directly on Metamask",
        "Transfer from another wallet",
      ],
    },
    {
      source: "../public/images/Uniswap or PancakeSwap.png",
      title: "Go to Uniswap or PancakeSwap",
      description: [
        "Connect to Uniswap if you’re buying on ETH side or PancakeSwap",
        "Paste the $XV token address into Uniswap, select XV, and confirm.",
        "When Metamask prompts you for a wallet signature, sign.",
      ],
    },
    {
      source: "../public/images/Swap ETHBNB.png",
      title: "Swap your ETH or BNB for $XV",
      description: [
        "Swap your ETH/BNB for $XV",
        "We have a 5% tax so you need to set your slippage a little above 6% specific slippage",
        "You may need to use higher slippage during times of market volatility",
      ],
    },
  ];

  return (
    <div className="  min-h-screen py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How You Buy $XV Token
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 m-10">
          {cardsData.map((cardsData, index) => (
            <div
              key={index}
              className=" rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#ffffff1a] "
            >
              <img
                src={cardsData.source}
                alt=""
                className="w-full h-100 object-contain rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{cardsData.title}</h3>
              <ul className="list-inside space-y-2 text-sm text-gray-300 ">
                {cardsData.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyXVToken;
