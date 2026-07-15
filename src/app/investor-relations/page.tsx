"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal } from "lucide-react";
import { useTerminal } from "@/context/TerminalContext";

export default function InvestorRelationsPage() {
  const { openTerminal } = useTerminal();

  return (
    <main className="relative w-full overflow-hidden min-h-screen selection:bg-neon-cyan/30 selection:text-white pt-32">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 mb-24 z-10 relative">
        
        <div className="mb-16 text-center">
          <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-4 block">
            [ CONFIDENTIAL ]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Investor Relations
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Syntharasight is backed by leading deep-tech venture capital. We provide transparent, programmatic access to our traction metrics and thesis.
          </p>
        </div>

        <div className="glass-panel p-12 border border-white/10 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Data Room Access</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            To view our current deck, cap table, and real-time financial projections, please authenticate via the secure terminal.
          </p>
          <button 
            onClick={openTerminal}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-mono text-white bg-accent-purple/20 border border-accent-purple hover:bg-accent-purple/30 transition-all group"
          >
            <Terminal className="w-5 h-5 group-hover:animate-pulse" />
            sudo ./request_access.sh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 border border-white/5">
            <h4 className="font-mono text-neon-cyan mb-4">// CORE THESIS</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              We believe the future of physical manufacturing looks like software compilation. By eliminating inventory storage and replacing it with predictive, just-in-time routing, we are unlocking trillions in trapped capital.
            </p>
          </div>
          <div className="glass-panel p-8 border border-white/5">
            <h4 className="font-mono text-paddy-green mb-4">// MARKET METRICS</h4>
            <ul className="text-sm text-gray-400 leading-relaxed font-mono flex flex-col gap-3">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>TAM:</span> <span className="text-white">$4.2T</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>GMV (ARR):</span> <span className="text-white">Confidential</span>
              </li>
              <li className="flex justify-between">
                <span>Node Count:</span> <span className="text-white">1,204</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
