"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function App() {
  const scrollTo = () => {
    scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
  };

  return (
    <Navbar shouldHideOnScroll isBordered className="bg-transparent">
      <NavbarBrand>
        <p className="font-bold  tracking-wider text-transparent bg-clip-text bg-gradient-to-tl from-violet-600 to-violet-400 ">
          CryptoFeed
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold"
            onClick={scrollTo}
            href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold"
            href="#about"
            onClick={scrollTo}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold"
            onClick={scrollTo}
            href="#minted">
            Minted
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold"
            onClick={scrollTo}
            href="#roadmap">
            Roadmap
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold"
            onClick={scrollTo}
            href="#team">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold"
            onClick={scrollTo}
            href="#contacts">
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="shadow">
            Join Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
