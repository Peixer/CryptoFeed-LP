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
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">CryptoFeed</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" onClick={scrollTo} href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" onClick={scrollTo}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#pricing" onClick={scrollTo}>
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={scrollTo} href="#minted">
            Minted
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={scrollTo} href="#roadmap">
            Roadmap
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={scrollTo} href="#team">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={scrollTo} href="#contacts">
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
