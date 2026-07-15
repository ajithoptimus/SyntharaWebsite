export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 relative w-full">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-neon-cyan via-accent-purple to-paddy-green opacity-50" />
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center bg-black">
            <span className="font-mono text-white font-bold">S</span>
          </div>
          <span className="font-mono text-gray-500 text-xs tracking-widest uppercase">
            Syntharasight © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex gap-6 font-mono text-xs text-gray-600">
          <a href="#" className="hover:text-neon-cyan transition-colors">Terminals</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Security</a>
        </div>

      </div>
    </footer>
  );
}
