import { Button } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import HeroSection from "./section/Hero";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Navbar shouldHideOnScroll className="bg-violet-400">
        <NavbarContent>
          <NavbarBrand>
            <h1 className="text-violet-800 font-semibold text-2xl select-none">
              GhostBlade
            </h1>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            Home
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/profile"
            className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer"
          >
            Profile
          </NavbarItem>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            Content
          </NavbarItem>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            About Us
          </NavbarItem>
          <NavbarItem className="font-semibold hover:text-violet-700 transition-colors hover:underline cursor-pointer">
            Contacts
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <HeroSection></HeroSection>
    </main>
  );
};

export default Home;
