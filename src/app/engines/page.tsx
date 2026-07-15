"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Database, Activity, Leaf, Eye } from "lucide-react";

export default function EnginesPortal() {
  const engines = [
    {
      name: "Synthara Vision",
      description: "Computer vision and edge-AI analysis engine for real-time factory floor telemetry.",
      icon: Eye,
      color: "text-neon-cyan",
      borderColor: "hover:border-neon-cyan",
      url: "http://localhost:3001", // Or production URL when ready
      status: "ONLINE"
    },
    {
      name: "Atlas Report",
      description: "Aggregated financial and inventory reporting matrix across all global deployment nodes.",
      icon: Activity,
      color: "text-accent-purple",
      borderColor: "hover:border-accent-purple",
      url: "#",
      status: "STANDBY"
    },
    {
      name: "Nelmani Fresh",
      description: "Agricultural optimization node. Predicts supply-side crop yields for raw material ingestion.",
      icon: Leaf,
      color: "text-paddy-green",
      borderColor: "hover:border-paddy-green",
      url: "#",
      status: "INITIALIZING"
    },
    {
      name: "Hydroleaf",
      description: "Water usage and sustainability metrics tracker for MSME ESG compliance.",
      icon: Database,
      color: "text-blue-400",
      borderColor: "hover:border-blue-400",
      url: "#",
      status: "STANDBY"
    }
  ];

  return (
    <main className="relative w-full overflow-hidden min-h-screen selection:bg-neon-cyan/30 selection:text-white pt-32 flex flex-col">
      <Navbar />
      
      <div className="flex-grow max-w-6xl mx-auto px-6 w-full mb-24 z-10 relative">
        <div className="mb-16">
          <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-4 block">
            [ INTERNAL SYSTEMS ]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engines Portal
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Select a sub-system to launch its dedicated dashboard. Ensure you have the proper secure authorization tokens before initiating a connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engines.map((engine) => (
            <a 
              key={engine.name} 
              href={engine.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel p-8 border border-white/10 ${engine.borderColor} transition-all group cursor-pointer block relative overflow-hidden`}
            >
              {/* Decorative background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <engine.icon className={`w-8 h-8 ${engine.color} mb-6`} />
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">{engine.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {engine.description}
                  </p>
                </div>
                
                <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>

              <div className="relative z-10 flex items-center gap-3 font-mono text-xs mt-auto pt-6 border-t border-white/5">
                <span className="text-gray-500">SYSTEM STATUS:</span>
                <span className={`${
                  engine.status === 'ONLINE' ? 'text-paddy-green' : 
                  engine.status === 'STANDBY' ? 'text-yellow-500' : 'text-gray-400'
                }`}>
                  [{engine.status}]
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
