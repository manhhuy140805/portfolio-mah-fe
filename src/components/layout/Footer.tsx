import Link from "next/link";
import { SITE_CONFIG } from "@/src/lib/constants";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-base font-semibold text-white">
            <span className="grid size-8 place-items-center rounded-md bg-[var(--accent)] text-sm">
              M
            </span>
            {SITE_CONFIG.name}
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
            Get ready to create focused portfolio pages for design, frontend,
            and product work.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Quick Link</h2>
          <div className="mt-5 grid gap-3 text-sm text-zinc-400">
            <Link className="transition hover:text-[var(--accent-warm)]" href="/about">
              About Me
            </Link>
            <Link className="transition hover:text-[var(--accent-warm)]" href="/projects">
              Projects
            </Link>
            <Link className="transition hover:text-[var(--accent-warm)]" href="/contact">
              Contact Me
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Newsletter</h2>
          <div className="mt-5 flex gap-2">
            <Input aria-label="Email address" placeholder="Email address" type="email" />
            <Button className="shrink-0" type="button">
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-zinc-500">
        {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  );
}
