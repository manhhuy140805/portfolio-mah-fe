import Link from "next/link";
import { NAV_LINKS } from "@/src/lib/constants";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6 text-sm font-semibold text-white">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              className="flex items-center gap-1 transition hover:text-[var(--accent)]"
              href={link.href}
            >
              {link.label}
              {(link as any).hasDropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
