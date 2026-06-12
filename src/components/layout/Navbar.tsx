import Link from "next/link";
import { NAV_LINKS } from "@/src/lib/constants";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-400 sm:gap-4">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              className="rounded-md px-2 py-1 transition hover:bg-white/5 hover:text-[var(--accent-warm)]"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
