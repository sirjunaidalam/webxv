import { Button, TextInput } from "flowbite-react";
import { NavLink } from "react-router";

export function RegistrationForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 ">
      <div>
        <TextInput id="username" type="text" placeholder="Username" required />
      </div>
      <div>
        <TextInput id="email1" type="email" placeholder="Email" required />
      </div>
      <div>
        <TextInput
          id="email1"
          type="email"
          placeholder="Re-type Email"
          required
        />
      </div>
      <div>
        <TextInput
          id="password1"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div>
        <TextInput
          id="password2"
          type="password"
          placeholder="Re-type Password"
          required
        />
      </div>
      <div>
        <TextInput
          id="address"
          type="text"
          placeholder="Wallet Address"
          required
        />
      </div>
      <Button type="submit">REGISTER</Button>
      <p className="text-center">
        Already have an Account?{" "}
        <NavLink className="text-blue-700">Login</NavLink>
      </p>
      <Button type="submit" className="bg-gray-800">
        CONTINUE WITH GOOGLE
      </Button>
    </form>
  );
}
