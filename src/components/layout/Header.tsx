"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Button from "@/src/components/ui/Button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/src/lib/constants";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/src/components/ui/LanguageSwitcher";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-(--background)/75 backdrop-blur-md border-b border-zinc-200 dark:border-white/5">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link 
          className="flex items-center gap-3 text-2xl font-bold text-zinc-900 dark:text-white" 
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/images/logo/logo-theme-light.png"
            alt="MA-H Logo"
            width={50}
            height={50}
            className="object-contain dark:hidden"
            priority
          />
          <Image
            src="/images/logo/logo-theme-dark.png"
            alt="MA-H Logo"
            width={50}
            height={50}
            className="object-contain hidden dark:block"
            priority
          />
          MA-H
        </Link>

        {/* Middle: Navigation */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button href="/Tran-Dinh-Manh-Huy-CV-Intern.pdf" target="_blank">
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-zinc-900 dark:text-white hover:text-(--accent) transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-white/10 bg-background absolute top-full left-0 w-full shadow-2xl">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4 text-base font-semibold text-zinc-900 dark:text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className="flex items-center justify-between w-full py-2 hover:text-(--accent) transition"
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {(link as any).hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-zinc-200 dark:border-white/10">
                <Button href="/Tran-Dinh-Manh-Huy-CV-Intern.pdf" target="_blank" className="w-full justify-center">
                  Download CV
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
