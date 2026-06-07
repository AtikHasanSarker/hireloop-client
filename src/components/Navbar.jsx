"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Browse Jobs", href: "#" },
    { label: "Company", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <div className="w-full bg-[#0B0B12] py-4">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span className="text-sky-500">hire</span>
              <span className="text-orange-500">loop</span>
            </h1>
          </Link>

          {/* Right Section */}
          <div className="hidden ml-auto items-center md:flex">
            {/* Nav Links */}
            <ul className="flex items-center gap-10">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="mx-8 h-6 w-px bg-white/15" />

            {/* Auth Actions */}
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm font-medium text-[#7B6CFF] hover:text-[#8F82FF]"
              >
                Sign In
              </Link>

              <Button
                radius="lg"
                className="h-11 bg-gradient-to-r from-[#6E5BFF] to-[#5C6CFF] px-6 font-medium text-white"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-[#111118] p-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 border-t border-white/10 pt-4">
                <Link href="#" className="mb-4 block text-[#7B6CFF]">
                  Sign In
                </Link>

                <Button className="w-full bg-linear-to-r from-[#6E5BFF] to-[#5C6CFF] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
