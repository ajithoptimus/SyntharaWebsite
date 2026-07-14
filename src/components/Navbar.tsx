"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { useTerminal } from "@/context/TerminalContext";

export default function Navbar() {
  const { openTerminal } = useTerminal();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center border border-neon-cyan box-glow-cyan bg-black/50">
            <span className="font-mono text-neon-cyan font-bold text-xl">S</span>
          </div>
          <span className="font-mono text-white tracking-[0.3em] font-medium text-sm hidden sm:block">
            SYNTHARASIGHT
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-400">
          <Link href="/architecture" className="hover:text-neon-cyan transition-colors">/architecture</Link>
          <Link href="/deployments" className="hover:text-neon-cyan transition-colors">/deployments</Link>
          <Link href="/investor-relations" className="hover:text-neon-cyan transition-colors">/investor-relations</Link>
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
