import React from 'react';
import { KEYWORD_BOOK } from '../constants';
import { Book, Command } from 'lucide-react';

const SystemSection: React.FC = () => {
  return (
    <section id="system" className="py-24 bg-black relative border-t border-white/10 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-center mb-16 space-x-3">
          <Book className="text-red-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest">
            KEYWORD BOOK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEYWORD_BOOK.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#121212] border border-white/10 rounded-sm p-6 hover:bg-[#181818] hover:border-red-500/30 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-red-900/10" />
              
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10 mb-4 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.2)] transition-all">
                <span className="font-mono text-red-500 font-bold text-lg">!</span>
              </div>
              
              <h3 className="text-xl font-bold text-white font-mono tracking-wider mb-2 group-hover:text-red-400 transition-colors">
                {item.command}
              </h3>
              
              <div className="h-px w-8 bg-white/20 my-2 group-hover:w-full group-hover:bg-red-900/50 transition-all duration-500" />
              
              <p className="text-sm text-gray-400 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center relative z-10">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-red-600 rounded blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <button className="relative bg-gradient-to-br from-[#1a1a1a] to-black border border-white/20 text-white font-bold py-5 px-16 rounded-sm tracking-[0.2em] uppercase hover:text-red-500 hover:border-red-500/50 transition-all duration-300">
                시뮬레이션 시작
            </button>
          </div>
          <p className="mt-6 text-xs text-gray-600 font-mono">
            * 19금 성인용 콘텐츠가 포함되어 있습니다. 주의하십시오.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SystemSection;