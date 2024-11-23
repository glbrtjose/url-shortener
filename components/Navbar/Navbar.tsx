"use client";
import React from "react";
import {
  Navbar as UINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";

const Navbar = () => {
  return (
    <UINavbar className="shadow-md">
      <NavbarBrand>
        <img
          src="/assets/svg/logo.svg"
          width={69}
          className="max-w-[69px] h-auto"
        />
        <p className="font-bold text-inherit ms-4">Short url test</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
    </UINavbar>
  );
};

export default Navbar;
