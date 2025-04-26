import { Button, TextInput } from "flowbite-react";

export function LoginForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 ">
      <div>
        <TextInput
          id="email1"
          type="email"
          placeholder="Username or email"
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
      <Button type="submit">LOGIN</Button>
      <p className="text-center">Forgotten your Password?</p>
      <p className="text-center">
        Don't have an Account? <a className="text-blue-700">Register</a>
      </p>
    </form>
  );
}
