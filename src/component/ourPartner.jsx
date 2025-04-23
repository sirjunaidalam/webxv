const partners = [
  { src: "./src/assets/images/Uniramp.png", alt: "Uniramp" },
  { src: "./src/assets/images/PinkSale.png", alt: "PinkSale" },
  { src: "./src/assets/images/Uniswap.png", alt: "Uniswap" },
  { src: "./src/assets/images/CoinGeko.png", alt: "CoinGecko" },
  { src: "./src/assets/images/PancakeSwap.png", alt: "PancakeSwap" },
  { src: "./src/assets/images/DexView.png", alt: "DexView" },
  { src: "./src/assets/images/CoinMarketCap.png", alt: "CoinMarketCap" },
];

export default function OurPartner() {
  return (
    <>
      <h1 className="text-xl text-center text-blue-700 mb-4 font-bold">
        OUR PARTNERS
      </h1>
      <div className="flex flex-wrap justify-center text-center">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="w-40 p-4"
          />
        ))}
      </div>
    </>
  );
}
