import React from "react";
import { ShieldCheck, LockKeyhole, Fingerprint, Globe2 } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="text-green-400 w-6 h-6" />,
    title: "Continuous authentication",
    description:
      "Unlike traditional methods that rely on one-time authentication, behavior authentication can monitor user activity continuously, providing ongoing security protection.",
  },
  {
    icon: <LockKeyhole className="text-yellow-400 w-6 h-6" />,
    title: "Reduced dependence on complex passwords",
    description:
      "The need to remember and manage complex passwords can be a burden for users. Behavior authentication can alleviate this pain point by offering a more natural and seamless authentication experience.",
  },
  {
    icon: <Fingerprint className="text-orange-400 w-6 h-6" />,
    title: "Potential for password less authentication",
    description:
      "In the future, behavior authentication might even eliminate the need for passwords altogether, offering a more convenient and secure way to access devices and applications.",
  },
  {
    icon: <Globe2 className="text-blue-400 w-6 h-6" />,
    title: "Expansion into New Markets",
    description:
      "The application can potentially be adapted for use in various industries beyond the initial target sectors, such as healthcare and e-commerce.",
  },
];

const AboutUs2 = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-10 lg:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto grid gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-700"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs2;
