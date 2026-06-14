"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Download, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Button from "@/src/components/ui/Button";

export default function PersonalBio() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative background glow inside the card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Column: Avatar & Contact */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              
              {/* Circular Avatar */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(47,47,228,0.3)] mx-auto lg:mx-0 group">
                <Image 
                  src="/images/dev/anh-cv.png" 
                  alt="Trần Đình Mạnh Huy" 
                  fill 
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 rounded-full border border-white/20 z-10 pointer-events-none" />
              </div>

              {/* Name & Title */}
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">Trần Đình Mạnh Huy</h2>
                <p className="text-lg text-[var(--accent-cyan)] font-medium">Web Developer</p>
              </div>
              
              <div className="w-full h-px bg-white/10" />

              {/* Contact Links */}
              <div className="flex flex-col gap-4 text-gray-400 text-sm w-full">
                <a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-[var(--accent-cyan)] shrink-0" /> Da Nang City, VN
                </a>
                <a href="mailto:trandinhmannhuy05@gmail.com" className="flex items-center justify-center lg:justify-start gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[var(--accent-cyan)] shrink-0" /> trandinhmannhuy05@gmail.com
                </a>
                <a href="https://github.com/manhhuy140805" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-3 hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5 text-[var(--accent-cyan)] shrink-0" /> manhhuy140805
                </a>
                <a href="https://linkedin.com/in/manhhuy140805" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-3 hover:text-white transition-colors">
                  <FaLinkedin className="w-5 h-5 text-[var(--accent-cyan)] shrink-0" /> manhhuy140805
                </a>
              </div>

              {/* Action Button */}
              <div className="w-full pt-4">
                <Button href="/cv.pdf" className="w-full flex justify-center py-4 bg-[var(--surface)] hover:bg-[var(--accent)] border border-white/10 shadow-lg group">
                  <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" /> Download CV
                </Button>
              </div>
            </div>

            {/* Right Column: Bio & Details */}
            <div className="flex-1 space-y-12">
              
              {/* Profile Summary */}
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-[var(--accent-cyan)]" />
                  <h3 className="text-white font-bold text-2xl">Profile Summary</h3>
                </div>
                <p>
                  Hi! I am a 3rd-year IT student passionate about building scalable and engaging <strong>Web Applications</strong>. I enjoy turning complex problems into simple, beautiful, and intuitive interfaces.
                </p>
                <p>
                  I am always eager to learn new technologies, write clean code, and create seamless digital experiences for users.
                </p>
              </div>

              {/* Personal Details Grid */}
              <div>
                <h3 className="text-white font-bold text-2xl mb-6">Quick Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-[var(--accent-cyan)] font-medium mb-1">Availability</span>
                    <span className="text-white font-semibold">Open to Internships</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-[var(--accent-cyan)] font-medium mb-1">Education</span>
                    <span className="text-white font-semibold">3rd-Year IT Student</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-[var(--accent-cyan)] font-medium mb-1">Languages</span>
                    <span className="text-white font-semibold">Vietnamese, English</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <span className="block text-sm text-[var(--accent-cyan)] font-medium mb-1">Interests</span>
                    <span className="text-white font-semibold">Coding, Design, Music</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
