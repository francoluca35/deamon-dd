"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-black text-center text-white">
      &copy; Created by{" "}
      <span className="text-purple-800">
        <a href="https://francomputer.com.ar" target="_blank">
          @FranComputer.
        </a>
      </span>
    </footer>
  );
}
