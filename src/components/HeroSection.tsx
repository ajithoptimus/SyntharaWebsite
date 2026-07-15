"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { useTerminal } from "@/context/TerminalContext";

export default function HeroSection() {
  const { openTerminal } = useTerminal();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-cyan/20 top-1/4 -left-32 animate-float" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent-purple/20 bottom-1/4 -right-32 animate-float" style={{ animationDelay: "3s" }} />

      <div className="w-full max-w-5xl mx-auto px-6 z-10 text-center">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-paddy-green/30 bg-paddy-green/5 mb-10"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-paddy-green animate-pulse-dot" />
          <span className="font-mono text-xs text-paddy-green/90 uppercase tracking-wider">
            System Status: Optimal | Zero-Inventory Orchestration Live
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight"
        >
          Synthetic Intelligence for <br className="hidden md:block" />
          <span className="text-gradient-animated font-bold">Physical Creation.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-12"
        >
          We are a Deep-Tech orchestration engine. Syntharasight replaces traditional &apos;Produce &amp; Pray&apos; manufacturing with a predictive <span className="text-white font-medium">Sense-Think-Act</span> loop, entirely eliminating inventory risk across MSME supply chains.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-none hover:scale-105 transition-transform">
            Explore Architecture
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={openTerminal}
            className="flex items-center gap-2 px-8 py-4 font-mono text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 border-glow-hover transition-all"
          >
            <Terminal className="w-5 h-5" />
            ./view_whitepaper.sh
          </button>
        </motion.div>

      </div>
    </section>
  );
}
