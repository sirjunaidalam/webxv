import { Button, TextInput } from "flowbite-react";

export function ProjectRegistration() {
  return (
    <form className="flex max-w-md flex-col gap-4 bg-gray-900 p-6 rounded-2xl text-white">
      <h1 className="text-center text-2xl font-semibold">
        Project registration
      </h1>

      {/* Basic Info */}
      <div className="mt-4">
        <h2 className="text-sm mb-2 text-gray-400">Basic info</h2>
        <TextInput type="text" placeholder="Project name" required />
        <TextInput type="text" placeholder="Project description" required />
        <TextInput type="text" placeholder="Logo (add URL)" required />
        <TextInput type="text" placeholder="Contract address" required />
      </div>

      {/* Social Media */}
      <div className="mt-4">
        <h2 className="text-sm mb-2 text-gray-400">Social media</h2>
        <TextInput type="text" placeholder="Facebook" />
        <TextInput type="text" placeholder="Twitter" />
        <TextInput type="text" placeholder="YouTube" />
        <TextInput type="text" placeholder="LinkedIn" />
      </div>

      {/* Community Info */}
      <div className="mt-4">
        <h2 className="text-sm mb-2 text-gray-400">Community info</h2>
        <TextInput type="text" placeholder="Community" />
        <TextInput type="text" placeholder="Website" />
        <TextInput type="text" placeholder="Game name" />
        <TextInput type="text" placeholder="Game URL" />
        <TextInput type="text" placeholder="Contract API endpoint" />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="mt-6 bg-blue-700 hover:bg-blue-800">
        SUBMIT
      </Button>
    </form>
  );
}
