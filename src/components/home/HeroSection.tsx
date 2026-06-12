import Image from "next/image";
import Button from "@/src/components/ui/Button";
import { portfolioStats } from "@/src/lib/portfolio-data";
import profileImage from "@/public/images/dev/anh-nua-nguoi.png";
import Typewriter from "@/src/components/ui/Typewriter";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[var(--background)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
      >
        <source src="/backgroud/bg-black-animation.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] lg:h-[calc(800px-74px)] max-w-6xl items-center gap-12 px-6 pt-16 pb-0 lg:py-0 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10">
          {/* Glowing Orb Background */}
          <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-[var(--accent-cyan)] opacity-20 blur-[100px] animate-pulse-glow"></div>
          
          <p className="animate-fade-in-up inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950" style={{ animationDelay: '0s' }}>
            3rd-Year IT Student
          </p>
          <h1 className="animate-fade-in-up mt-4 max-w-3xl text-4xl sm:text-5xl font-bold leading-tight text-white md:text-6xl" style={{ animationDelay: '0.1s' }}>
            Mạnh Huy
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-zinc-300 md:text-lg" style={{ animationDelay: '0.2s' }}>
            I am a 3rd-year student passionate about web development. I focus on building modern UI/UX experiences, and continuously learning new technologies to hone my skills.
          </p>
          <div className="animate-fade-in-up mt-2 h-[48px] sm:h-[32px] max-w-2xl text-sm sm:text-base leading-6 sm:leading-8 text-[var(--accent-cyan)] font-medium md:text-lg" style={{ animationDelay: '0.3s' }}>
            <Typewriter 
              phrases={[
                "Prioritizing user experience over just visual UI.",
                "Designing intuitive, accessible, and scalable systems.",
                "Writing clean code to build high-performance products."
              ]} 
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={2500}
            />
          </div>
          <div className="animate-fade-in-up mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3" style={{ animationDelay: '0.4s' }}>
            <Button href="/contact">Hire Portfolio</Button>
            <Button href="/projects" variant="secondary">
              Explore Work
            </Button>
          </div>
          <div className="animate-fade-in-up mt-10 sm:mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" style={{ animationDelay: '0.5s' }}>
            {portfolioStats.map((stat) => (
              <div
                className="group rounded-lg border border-black/10 bg-[var(--surface-cream)] p-3 sm:p-4 text-zinc-950 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/20"
                key={stat.label}
              >
                <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs leading-4 sm:leading-5 text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center items-end h-[350px] sm:h-[450px] lg:h-full w-full mt-10 lg:mt-0">
          {/* Background Text */}
          <div className="animate-fade-in-up pointer-events-none absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ animationDelay: '0.8s' }}>
            <div className="animate-float-bg whitespace-nowrap text-[32px] sm:text-[50px] lg:text-[60px] font-black text-white tracking-tight">
              WEB DEVELOPER
            </div>
          </div>
          
          <Image
            alt="Mạnh Huy"
            className="animate-fade-in-up relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: '0.6s' }}
            placeholder="blur"
            priority
            src={profileImage}
          />

          {/* Foreground Outline Text */}
          <div className="animate-fade-in-up pointer-events-none absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 z-20" style={{ animationDelay: '1.0s' }}>
            <div 
              className="animate-float-fg whitespace-nowrap text-[32px] sm:text-[50px] lg:text-[60px] font-black text-transparent tracking-tight" 
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.7)' }}
            >
              WEB DEVELOPER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
