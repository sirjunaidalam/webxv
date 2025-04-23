import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavBar() {
  return (
    <Navbar fluid rounded className="bg-black">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="./src/assets/images/XV-Logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Web XV Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="hidden md:block">Register</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="">
        <NavbarLink className="text-white " href="#">
          Web XV
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          All Projects
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          Community
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          About Us
        </NavbarLink>
        <Button className="md:hidden">Register</Button>
      </NavbarCollapse>
    </Navbar>
  );
}
