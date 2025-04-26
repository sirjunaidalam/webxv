import React from "react";
import { Star } from "lucide-react";

const cards = [
  {
    title: "Decentraland",
    rating: 3.94,
    votes: 16,
    stars: 4,
    description:
      "Decentraland is a 3D virtual world browser-based platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain. Designers can create and sell clothes and accessories for the avatars to be used in the virtual world.",
    image: "../public/images/Decentraland.png",
  },
  {
    title: "House of Degenerates",
    rating: 3.94,
    votes: 19,
    stars: 4,
    description:
      "Buckle up, fellow degens, because the House of Degenerates ($HOD) is here to redefine the Web3 experience! Embark on the Ultimate Gaming Odyssey...",
    image: "../public/images/Degenerators.png",
  },
  {
    title: "Axie Infinity",
    rating: 3.44,
    votes: 16,
    stars: 3,
    description:
      "Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses...",
    image: "../public/images/axieinfinity.png",
  },
  {
    title: "EVCoin",
    rating: 3.65,
    votes: 31,
    stars: 4,
    description:
      "EverestCoin’s Play to Earn Game, PeakXV is changing the way blockchain games are played, by bringing fun into the picture. Earn while you play, but...",
    image: "../src/assets/images/evcoin.png",
  },
];

const RatingCard = ({ title, rating, votes, stars, description, image }) => (
  <div className="bg-gray-900 rounded-2xl p-6 mb-6 shadow-lg">
    <div className="flex gap-4 items-start">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">{rating} / 5</p>
        <p className="text-sm text-gray-400 mb-1">Based on {votes} votes</p>
        <div className="flex gap-1 mb-2">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-white text-white" />
          ))}
        </div>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        <div className="flex gap-4 text-sm text-blue-400">
          <a href="#" className="text-blue-400 hover:underline">
            Learn more
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Go to website
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AllProjects = () => (
  <div className="p-4 max-w-3xl mx-auto">
    {cards.map((card, idx) => (
      <RatingCard key={idx} {...card} />
    ))}
  </div>
);

export default AllProjects;
