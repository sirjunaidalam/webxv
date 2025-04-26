import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10 px-6 md:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">WebXV</h1>
        <p className="text-lg mb-6">
          At WebXV, we take your privacy seriously. This privacy policy explains
          how we collect, use, and protect your personal information.
        </p>
        <ul className="space-y-4 list-disc pl-6">
          <li>
            <span className="font-bold">Information We Collect:</span> We
            collect personal information you provide to us, such as your name,
            email address, and profile information. We also collect information
            automatically when you use WebXV, such as your IP address, device
            information, and usage data.
          </li>
          <li>
            <span className="font-bold">Use of Information:</span> We use your
            personal information to provide and improve WebXV, communicate with
            you, and personalize your experience. We may also use your
            information to send you promotional communications and analyze usage
            trends.
          </li>
          <li>
            <span className="font-bold">Sharing of Information:</span> We may
            share your personal information with third-party service providers
            that assist us in operating WebXV. We may also disclose your
            information in response to legal requests or to protect our rights
            and interests.
          </li>
          <li>
            <span className="font-bold">Data Security:</span> We take reasonable
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction. Nonetheless, you
            agree to absolve us, our partners, and our advertisers of any breach
            caused to your data through any acts known, or unknown to us.
          </li>
          <li>
            <span className="font-bold">Children's Privacy:</span> WebXV is not
            intended for children under the age of 13. We do not knowingly
            collect personal information from children under 13 years of age.
          </li>
          <li>
            <span className="font-bold">Your Choices:</span> You may choose to
            access, update, or delete your personal information by contacting
            us. You may also opt out of receiving promotional communications
            from us.
          </li>
          <li>
            <span className="font-bold">Changes to Terms:</span> We reserve the
            right to modify this privacy policy at any time. If we make material
            changes to this policy, we will notify you by email or by posting a
            notice on WebXV.
          </li>
          <li>
            <span className="font-bold">Contact Us:</span> If you have any
            questions or concerns about these terms, please contact us at{" "}
            <a href="mailto:contact@x-v.io" className="underline text-blue-400">
              contact@x-v.io
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
