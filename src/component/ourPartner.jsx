const partners = [
  { src: "../public/images/Uniramp.png", alt: "Uniramp" },
  { src: "../public/images/PinkSale.png", alt: "PinkSale" },
  { src: "../public/images/Uniswap.png", alt: "Uniswap" },
  { src: "../public/images/CoinGeko.png", alt: "CoinGecko" },
  { src: "../public/images/PancakeSwap.png", alt: "PancakeSwap" },
  { src: "../public/images/DexView.png", alt: "DexView" },
  { src: "../public/images/CoinMarketCap.png", alt: "CoinMarketCap" },
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
