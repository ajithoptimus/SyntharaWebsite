"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";
import { useTerminal } from "@/context/TerminalContext";

const navLinks = [
  { href: "/engines", label: "[Engines_Hub]" },
  { href: "/architecture", label: "/architecture" },
  { href: "/deployments", label: "/deployments" },
  { href: "/investor-relations", label: "/investor-relations" },
];

export default function Navbar() {
  const { openTerminal } = useTerminal();
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center border border-neon-cyan box-glow-cyan bg-black/50 group-hover:bg-neon-cyan/10 transition-colors">
            <span className="font-mono text-neon-cyan font-bold text-xl group-hover:animate-pulse">S</span>
          </div>
          <span className="font-mono text-white tracking-[0.3em] font-medium text-sm hidden sm:block group-hover:text-neon-cyan transition-colors">
            SYNTHARASIGHT
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 ${
                  isActive
                    ? "text-neon-cyan font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <button 
          onClick={openTerminal}
          className="flex items-center gap-2 px-5 py-2.5 font-mono text-sm border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-colors border-glow-hover group"
        >
          <Terminal className="w-4 h-4 group-hover:animate-pulse" />
          INIT_CONNECTION
        </button>

      </div>
    </motion.nav>
  );
}
