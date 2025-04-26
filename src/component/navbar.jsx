import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router";

export function NavBar() {
  return (
    <Navbar fluid rounded className="bg-black position-sticky">
      <NavbarBrand to="https://flowbite-react.com">
        <img
          src="../public/images/XV-Logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Web XV Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavLink to="/Registration">
          <Button className="hidden md:block">Register</Button>
        </NavLink>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="">
        <NavLink className="text-white " to="/">
          Web XV
        </NavLink>
        <NavLink className="text-white" to="/AllProjects">
          All Projects
        </NavLink>
        <NavLink className="text-white" to="/Community">
          Community
        </NavLink>
        <NavLink className="text-white" to="/AboutUs">
          About Us
        </NavLink>
        <Button className="md:hidden">Register</Button>
      </NavbarCollapse>
    </Navbar>
  );
}
