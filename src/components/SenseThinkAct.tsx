"use client";

import { motion } from "framer-motion";
import { Radio, BrainCircuit, Zap } from "lucide-react";

const steps = [
  {
    phase: "SENSE",
    module: "Sentinel",
    color: "var(--color-paddy-green)",
    borderClass: "hover:border-paddy-green hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    textClass: "text-paddy-green",
    icon: <Radio className="w-8 h-8 text-paddy-green mb-6" />,
    description: "Hyper-Local Data Swarm. Ingesting zero-party behavioral and IoT data through Walled-Garden community portals (kongad.com) and physical hardware sensors (HydroLeaf).",
  },
  {
    phase: "THINK",
    module: "Vision Brain",
    color: "var(--color-accent-purple)",
    borderClass: "hover:border-accent-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    textClass: "text-accent-purple",
    icon: <BrainCircuit className="w-8 h-8 text-accent-purple mb-6" />,
    description: "Predictive Reasoning. Our domain-agnostic Gemini 1.5 Pro engine analyzes local sentiment, agricultural yields, and psychographic vectors to predict precise physical demand before it happens.",
  },
  {
    phase: "ACT",
    module: "Propagation",
    color: "var(--color-neon-cyan)",
    borderClass: "hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    textClass: "text-neon-cyan",
    icon: <Zap className="w-8 h-8 text-neon-cyan mb-6" />,
    description: "Autonomous Execution. Routing verified orders directly to decentralized MSME manufacturers via OpenClaw/WhatsApp integrations, triggering Just-In-Time physical production.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function SenseThinkAct() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-4 block">
            [ ARCHITECTURE OVERVIEW ]
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Sense-Think-Act Engine
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`glass-panel p-8 flex flex-col transition-all duration-500 cursor-default border border-white/5 ${step.borderClass}`}
            >
              {step.icon}
              
              <div className="mb-4">
                <span className={`font-mono text-sm font-bold tracking-wider ${step.textClass}`}>
                  {step.phase}
                </span>
                <span className="text-gray-500 font-mono mx-2">/</span>
                <span className="font-mono text-white text-sm">
                  {step.module}
                </span>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
