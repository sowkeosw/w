import React from 'react';
import { WORLD_LORE, IMAGE_BASE_URL } from '../constants';

const LoreSection: React.FC = () => {
  return (
    <section id="world" className="py-24 bg-[#080808] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">World Setting</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">세계관 & 이슈</h2>
        </div>

        <div className="space-y-12">
          {WORLD_LORE.map((lore, idx) => (
            <div key={idx} className="bg-panel-bg border border-white/10 p-8 md:p-10 rounded-sm relative overflow-hidden group hover:border-white/20 transition-colors">
               {/* Background Hint */}
               {lore.imgId && (
                  <div className="absolute inset-0 z-0 opacity-20">
                      <img 
                        src={`${IMAGE_BASE_URL}${lore.imgId}.webp`} 
                        className="w-full h-full object-cover grayscale mix-blend-overlay"
                        alt="background"
                      />
                  </div>
               )}

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-6 border-l-4 border-red-700 pl-4">
                  {lore.title}
                </h3>
                <ul className="space-y-4">
                  {lore.content.map((text, i) => (
                    <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoreSection;