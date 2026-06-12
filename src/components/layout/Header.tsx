import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Button from "@/src/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--background)]/75 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link className="flex items-center gap-3 text-2xl font-bold text-white" href="/">
          <Image
            src="/images/logo/logo-1.png"
            alt="MA-H Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          MA-H
        </Link>

        {/* Middle: Navigation */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Button
            href="/cv.pdf"
            className="hidden sm:inline-flex"
          >
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
}
