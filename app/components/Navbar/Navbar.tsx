"use client";
import React, { useState } from "react";
import { HoveredLink,MenuItem, Menu } from "../ui/floating-navbar";
import { cn } from "@/app/utils/cn";
import { ProductItem } from "../ui/floating-navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";



export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 p-4 backdrop-blur bg-white/10 border-white/20 rounded-3xl", className)}
    >
      <Menu setActive={setActive}>
        
        <MenuItem setActive={setActive} active={active} item="Projects"/>
        
      
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">NEXT.JS</HoveredLink>
            <HoveredLink href="/individual">REACT.JS</HoveredLink>
            <HoveredLink href="/team">MONGODB</HoveredLink>
            <HoveredLink href="/enterprise">REST API</HoveredLink>
          </div>
        </MenuItem>
      <div className="flex items-center space-x-4 ml-4">
        <Link href="https://github.com/DEVANSHUKEJRIWAL" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/devanshu-kejriwal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white w-6 h-6" />
        </Link>
      </div>
      </Menu>
    </div>
  );
}
