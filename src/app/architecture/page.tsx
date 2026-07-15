import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Server, Database, BrainCircuit, Activity } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <main className="relative w-full overflow-hidden min-h-screen selection:bg-neon-cyan/30 selection:text-white pt-32">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 mb-24 z-10 relative">
        
        <div className="mb-16">
          <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-4 block">
            [ SYSTEM TOPOLOGY ]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Architecture Core
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Syntharasight relies on a decentralized, event-driven microservices architecture to process zero-party data and translate it into physical action with sub-100ms latency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel p-8 border border-white/10 hover:border-paddy-green transition-colors group">
            <Database className="w-10 h-10 text-paddy-green mb-6 group-hover:animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-3">Data Ingestion Swarm</h3>
            <p className="text-gray-400 mb-6">
              Distributed edge nodes collect hyper-local telemetry via MQTT and Websockets. Data is buffered in Kafka topics to ensure zero data loss during network partitions.
            </p>
            <div className="font-mono text-xs text-gray-500 bg-black/50 p-4 border border-white/5 rounded">
              <span className="text-paddy-green">Topic:</span> telemetry.v2.kongad<br/>
              <span className="text-paddy-green">Throughput:</span> 4.2M msgs/sec
            </div>
          </div>

          <div className="glass-panel p-8 border border-white/10 hover:border-accent-purple transition-colors group">
            <BrainCircuit className="w-10 h-10 text-accent-purple mb-6 group-hover:animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-3">Gemini 1.5 Pro Engine</h3>
            <p className="text-gray-400 mb-6">
              Our core intelligence layer utilizes Google's Gemini 1.5 Pro for multimodal reasoning over massive context windows. It extracts sentiment and predicts physical demand.
            </p>
            <div className="font-mono text-xs text-gray-500 bg-black/50 p-4 border border-white/5 rounded">
              <span className="text-accent-purple">Model:</span> gemini-1.5-pro<br/>
              <span className="text-accent-purple">Context:</span> 2M Tokens / Request
            </div>
          </div>

          <div className="glass-panel p-8 border border-white/10 hover:border-neon-cyan transition-colors group md:col-span-2">
            <div className="flex items-start gap-6">
              <Server className="w-10 h-10 text-neon-cyan flex-shrink-0 group-hover:animate-pulse" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Orchestration & Routing</h3>
                <p className="text-gray-400 mb-6 max-w-4xl">
                  Once demand is predicted, the routing layer triggers WhatsApp/OpenClaw APIs to automatically queue manufacturing orders at our MSME partners, completely bypassing traditional inventory storage.
                </p>
                <div className="flex gap-12 font-mono text-sm">
                  <div>
                    <span className="block text-gray-500 mb-1">Compute</span>
                    <span className="text-white">Kubernetes / Rust</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">State</span>
                    <span className="text-white">Redis Cluster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
