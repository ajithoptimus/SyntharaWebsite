"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminal } from "@/context/TerminalContext";
import { X, Minus, Square } from "lucide-react";

interface LogEntry {
  type: "input" | "output" | "error" | "system";
  content: React.ReactNode;
}

export default function TerminalOverlay() {
  const { isOpen, closeTerminal } = useTerminal();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "system", content: "SyntharaOS v2.4.1 (Deep-Tech Orchestration Kernel)" },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  // Auto focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom when history changes
  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeTerminal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeTerminal]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add the input to history
    setHistory(prev => [...prev, { type: "input", content: `visitor@synthara:~$ ${cmd}` }]);

    if (trimmedCmd === "") return;

    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 mt-2 mb-2">
            <div><span className="text-neon-cyan">status</span>         - Display system operational metrics</div>
            <div><span className="text-neon-cyan">request access</span> - Initiate onboarding sequence</div>
            <div><span className="text-neon-cyan">whoami</span>         - Display current session user</div>
            <div><span className="text-neon-cyan">clear</span>          - Clear terminal history</div>
            <div><span className="text-neon-cyan">exit</span>           - Close terminal session</div>
          </div>
        );
        break;
      case "status":
        output = (
          <div className="text-paddy-green mt-2 mb-2">
            [OK] Sentinel nodes active: 1,204<br/>
            [OK] Vision Brain latency: 12ms<br/>
            [OK] JIT MSME routing: Online<br/>
            Overall system health: OPTIMAL
          </div>
        );
        break;
      case "request access":
        output = <div className="text-accent-purple mt-2 mb-2">Initiating secure handshake... Please email access@syntharasight.com with your payload.</div>;
        break;
      case "whoami":
        output = "guest_user_409";
        break;
      case "clear":
        setHistory([]);
        return; // Return early so we don't add the output log
      case "exit":
        closeTerminal();
        return;
      default:
        output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }

    setHistory(prev => [...prev, { type: "output", content: output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTerminal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[70vh] flex flex-col rounded-xl overflow-hidden glass-panel border border-white/20 shadow-2xl shadow-neon-cyan/10"
          >
            {/* Top Bar */}
            <div className="h-10 bg-black/80 border-b border-white/10 flex items-center justify-between px-4 select-none">
              <div className="flex gap-2">
                <button onClick={closeTerminal} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center group">
                  <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </button>
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center group">
                  <Minus className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </button>
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center group">
                  <Square className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </button>
              </div>
              <div className="font-mono text-xs text-gray-500">
                visitor@syntharasight: ~
              </div>
              <div className="w-14" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-grow bg-black/95 p-6 overflow-y-auto font-mono text-sm text-gray-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-1 leading-relaxed">
                  {entry.content}
                </div>
              ))}
              
              <form onSubmit={onSubmit} className="flex items-center mt-2 text-neon-cyan">
                <span className="mr-2">visitor@synthara:~$</span>
                <input 
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow bg-transparent outline-none border-none text-white caret-neon-cyan"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
              <div ref={endOfTerminalRef} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
