import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/src/lib/constants";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0f0f11] overflow-hidden">
      {/* Faint Background Shape */}
      <div className="pointer-events-none absolute -left-20 top-10 opacity-5">
        <Image
          src="/images/logo/logo-theme-light.png"
          alt="Background shape"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[400px] h-auto object-contain dark:hidden scale-[1.5]"
        />
        <Image
          src="/images/logo/logo-theme-dark.png"
          alt="Background shape"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[400px] h-auto object-contain hidden dark:block"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
        
        {/* Left: Logo, Big Text, Email Input */}
        <div className="flex flex-col gap-8 lg:col-span-5 lg:pr-10">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-theme-light.png"
              alt={`${SITE_CONFIG.name} Logo`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 w-auto object-contain dark:hidden scale-[1.5]"
            />
            <Image
              src="/images/logo/logo-theme-dark.png"
              alt={`${SITE_CONFIG.name} Logo`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 w-auto object-contain hidden dark:block"
            />
            <span className="text-xl font-bold text-zinc-900 dark:text-white">{SITE_CONFIG.name}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-zinc-900 dark:text-white">
            Get Ready To <br />
            <span className="font-light text-zinc-600 dark:text-zinc-300">Create Great</span>
          </h2>
          
          <div className="relative mt-4 w-full max-w-sm">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full border-b border-zinc-300 dark:border-white/20 bg-transparent py-3 pr-10 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Middle: Quick Link */}
        <div className="lg:col-span-3">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Quick Link</h3>
          <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            <Link className="transition hover:text-[var(--accent-cyan)]" href="/">Home</Link>
            <Link className="transition hover:text-[var(--accent-cyan)]" href="/about">About Me</Link>
            <Link className="transition hover:text-[var(--accent-cyan)]" href="/projects">Projects</Link>
            <a className="transition hover:text-[var(--accent-cyan)]" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Resume / CV</a>
          </div>
        </div>

        {/* Right: Contact & Socials */}
        <div className="lg:col-span-4">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Contact</h3>
          
          <div className="flex flex-col gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white transition-colors hover:bg-[var(--accent-cyan)] hover:text-white">
                <Mail className="h-4 w-4" />
              </div>
              <a href="mailto:trandinhmanhhuy05@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                trandinhmanhhuy05@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white transition-colors hover:bg-[var(--accent-cyan)] hover:text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Da Nang, Vietnam</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white transition-colors hover:bg-[var(--accent-cyan)] hover:text-white">
                <Phone className="h-4 w-4" />
              </div>
              <a href="tel:+84326149986" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                +84 326 149 986
              </a>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <a href="https://github.com/manhhuy140805" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white transition-all hover:bg-zinc-300 dark:hover:bg-white/10 hover:scale-110">
              <FaGithub className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white transition-all hover:text-white hover:bg-[#0a66c2] hover:scale-110">
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white transition-all hover:text-white hover:bg-[#1877f2] hover:scale-110">
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-zinc-200 dark:border-white/10 px-6 py-6 sm:flex-row text-xs text-zinc-500 font-medium">
        <p>
          &copy; {SITE_CONFIG.name} {new Date().getFullYear()} | All Rights Reserved
        </p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms & Condition</Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
