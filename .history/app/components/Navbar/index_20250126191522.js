'use client'
import React from "react";
import Link from "next/link";
import { Menu, MenuItem } from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { Home, Menu as MenuIcon, User } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-xl font-bold text-gray-800 hover:text-blue-600 flex items-center">
              <Home className="w-5 h-5 mr-2" /> MyApp
            </a>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/about">
            <a className="text-gray-600 hover:text-blue-600 transition">About</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-600 hover:text-blue-600 transition">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </Link>
        </div>

        <div className="flex md:hidden">
          <Menu>
            <MenuIcon className="w-6 h-6 text-gray-800" />
            <MenuItem>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services">Services</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">Contact</Link>
            </MenuItem>
          </Menu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </Button>
          <Button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
