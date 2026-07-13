"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  {
    id: "nelmani",
    name: "Nelmani-Fresh",
    sector: "Agri-Commerce",
    status: "LIVE",
    statusColor: "text-paddy-green",
    statusDot: "bg-paddy-green",
    desc: "Zero-inventory predictive agriculture. Decentralized aged-paddy storage combined with JIT (Just-In-Time) micro-milling.",
    accent: "border-paddy-green",
  },
  {
    id: "kongad",
    name: "Kongad.com",
    sector: "Civic Data Sandbox",
    status: "ACTIVE",
    statusColor: "text-neon-cyan",
    statusDot: "bg-neon-cyan",
    desc: "Hyper-local community portal acting as a zero-party data ingestion engine for demographic and infrastructure signaling.",
    accent: "border-neon-cyan",
  },
  {
    id: "hydroleaf",
    name: "HydroLeaf",
    sector: "IoT Infrastructure",
    status: "PILOT",
    statusColor: "text-electric-blue",
    statusDot: "bg-electric-blue",
    desc: "Smart irrigation and water stress prediction nodes deployed to secure raw material supply chains.",
    accent: "border-electric-blue",
  },
  {
    id: "aurastitch",
    name: "AuraStitch",
    sector: "Agile Manufacturing",
    status: "INITIALIZING",
    statusColor: "text-accent-purple",
    statusDot: "bg-accent-purple animate-pulse",
    desc: "Event-driven apparel manufacturing. Routes designs to MSMEs strictly based on predictive sentiment analysis.",
    accent: "border-accent-purple",
  }
];

export default function Deployments() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl font-mono font-bold text-white uppercase flex items-center gap-4">
            <span className="text-neon-cyan">~/</span> Live Deployments
            <div className="h-[1px] flex-grow bg-white/10 ml-6" />
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Panel - Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {nodes.map((node) => {
              const isActive = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`text-left p-4 border-l-2 transition-all duration-300 flex items-center justify-between group
                    ${isActive 
                      ? `${node.accent} bg-white/5` 
                      : 'border-white/10 hover:border-white/30 hover:bg-white-[0.02]'
                    }`}
                >
                  <div>
                    <div className={`font-mono text-sm mb-1 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                      {node.name}
                    </div>
                    <div className="text-xs text-gray-600 font-mono uppercase">
                      Sector: {node.sector}
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-2 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${node.statusColor}`}>
                      {node.status}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${node.statusDot}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel - Content */}
          <div className="lg:w-2/3">
            <div className="glass-panel p-8 md:p-12 min-h-[300px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {activeNode.name}
                      </h3>
                      <p className="font-mono text-sm text-gray-400">
                        // {activeNode.sector}
                      </p>
                    </div>
                    <div className={`px-3 py-1 border rounded font-mono text-xs ${activeNode.accent} ${activeNode.statusColor} bg-black/50`}>
                      {activeNode.status}
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                    {activeNode.desc}
                  </p>

                  <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-mono mb-1">Latency</span>
                      <span className="text-sm text-white font-mono">12ms</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-mono mb-1">Uptime</span>
                      <span className="text-sm text-white font-mono">99.99%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-mono mb-1">Data Shards</span>
                      <span className="text-sm text-white font-mono">256</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle background accent glow matching the active node */}
              <div 
                className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-10 transition-colors duration-500
                  ${activeNode.statusDot.split(' ')[0]} 
                `}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
