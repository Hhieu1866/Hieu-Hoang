"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Project" },
    { href: "/snippets", label: "Snippets" },
    { href: "/blog", label: "Blog" },
    // { href: "/tools", label: "Tools" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "border-b border-white/20 bg-white/10 backdrop-blur-md"
            : "border-b border-black/20 bg-black/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <div
              className={`bg-gradient-to-r text-2xl font-bold ${
                isDark
                  ? "from-purple-400 to-pink-400"
                  : "from-purple-600 to-pink-600"
              } cursor-pointer bg-clip-text text-transparent`}
            >
              Hi, I'm Hieu.
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isDark
                    ? "text-white/80 hover:text-white"
                    : "text-black/80 hover:text-black"
                } transform transition-colors duration-200 hover:scale-105`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className={
                isDark
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isDark ? "text-white" : "text-black"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden ${isDark ? "bg-white/10" : "bg-black/10"} mb-4 rounded-lg p-4 backdrop-blur-md`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 ${
                  isDark
                    ? "text-white/80 hover:text-white"
                    : "text-black/80 hover:text-black"
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
