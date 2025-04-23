import React from "react";

const AboutUs = () => {
  return (
    <section className=" py-16 px-6 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h5 className="text-[#4180F8] uppercase font-medium text-sm mb-2">
          About Us
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-300 mb-4">
          XV is a community-focused project led by a highly experienced team of
          Web3 builders and traders. Our founder A On made his name in the
          industry moderating for several early crypto projects before the 2021
          bull run.
        </p>
        <p className="text-gray-300">
          XV is also supported by several team members that are actively
          involved in the day-to-day running of the community. Join us on
          Telegram and Twitter.
        </p>
      </div>

      {/* Image or Graphic Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className=" p-8 w-full max-w-md h-64 flex items-center justify-center">
          {/* Replace this div with an actual image if available */}
          <img src="./src/assets/images/AboutUs.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
