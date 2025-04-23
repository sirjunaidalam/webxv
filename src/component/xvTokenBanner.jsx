import React from "react";
import { Button } from "flowbite-react";
const XvTokenBanner = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-8 rounded-xl text-center shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold leading-tight mb-6">
          <span className="block">With XV Token The</span>
          <span className="block"> Possibilities Are Limitless</span>
        </h1>

        <p className="text-lg opacity-90 mb-8 leading-relaxed">
          One token for everything. $XV is the utility token for an ecosystem
          that has <br />
          gotten bigger than ever before and is now fully community-oriented.
        </p>
        <div className="flex justify-center">
          <Button className="">REGISTER NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default XvTokenBanner;
