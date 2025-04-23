import { LoginForm } from "./loginForm";
import { Button } from "flowbite-react";

export default function HeroSection() {
  return (
    <section className="py-16 px-6 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Half */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Welcome to <br />
          Web XV
        </h1>
        <p className="text-lg mb-6 ">
          Meet cool WEB3 projects and connect with <br />
          other crypto enthusiasts!
        </p>
        <Button color="blue">REGISTER NOW</Button>
      </div>

      {/* Right Half */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="bg-[#ffffff1a] rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl mb-4 font-semibold">Welcome back</h2>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
