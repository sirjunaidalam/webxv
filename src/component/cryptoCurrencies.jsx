import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiSolana, SiRipple } from "react-icons/si";

const data = [
  {
    name: "Bitcoin",
    symbol: "BTC / USD",
    icon: <FaBitcoin className="text-orange-500" />,
    price: "$42,122.00",
    change: "-2.93%",
    up: false,
  },
  {
    name: "Ethereum",
    symbol: "ETH / USD",
    icon: <FaEthereum className="text-purple-500" />,
    price: "$2,214.77",
    change: "-2.22%",
    up: false,
  },
  {
    name: "Tether",
    symbol: "USDT / USD",
    icon: <SiTether className="text-green-400" />,
    price: "$0.9999",
    change: "+0.04%",
    up: true,
  },
  {
    name: "Solana",
    symbol: "SOL / USD",
    icon: <SiSolana className="text-cyan-400" />,
    price: "$107.41",
    change: "-1.20%",
    up: false,
  },
  {
    name: "XRP",
    symbol: "XRP / USD",
    icon: <SiRipple className="text-blue-400" />,
    price: "$0.6183",
    change: "-3.09%",
    up: false,
  },
];

export default function TopCryptoChart() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-blue-500 font-bold ">CRYPTOCURRENCIES</h2>
      <h1 className="text-4xl mb-5">Top Crypto Chart</h1>

      <div className="bg-[#ffffff1a] rounded-3xl md:w-2/3 w-full">
        <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-70 text-sm font-semibold">
          <div>NAME</div>
          <div>PRICE</div>
          <div>GRAPH</div>
        </div>

        {data.map((coin, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center px-6 py-4 border-b border-gray-800 last:border-none"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{coin.icon}</span>
              <div>
                <div className="font-medium ">{coin.name}</div>
                <div className="text-xs">{coin.symbol}</div>
              </div>
            </div>
            <div>
              <div className="font-semibold">{coin.price}</div>
              <div
                className={`text-sm ${
                  coin.up ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.change}
              </div>
            </div>
            <div>
              <img src="../public/images/Graph.png" alt="No Graph Found" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
