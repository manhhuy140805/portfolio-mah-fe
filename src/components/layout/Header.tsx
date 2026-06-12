import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="flex items-center gap-2 text-base font-semibold text-white"
          href="/"
        >
          <span className="grid size-8 place-items-center rounded-md bg-[var(--accent)] text-sm text-white">
            M
          </span>
          MAH Portfolio
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
