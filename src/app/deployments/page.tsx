"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Deployments from "@/components/Deployments";

export default function DeploymentsPage() {
  return (
    <main className="relative w-full overflow-hidden min-h-screen selection:bg-neon-cyan/30 selection:text-white pt-32 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col">
        <div className="max-w-7xl mx-auto px-6 w-full mb-8">
          <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-4 block">
            [ GLOBAL STATE ]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Active Nodes
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Real-time telemetry and operational status of all decentralized physical nodes currently orchestrated by the Syntharasight kernel.
          </p>
        </div>

        {/* Re-use the existing Deployments component */}
        <Deployments />
      </div>

      <Footer />
    </main>
  );
}
