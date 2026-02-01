import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoreSection from './components/LoreSection';
import FactionSection from './components/FactionSection';
import SystemSection from './components/SystemSection';
import { CHARACTERS } from './constants';
import { Faction } from './types';

function App() {
  const minamotoChars = CHARACTERS.filter(c => c.faction === Faction.Minamoto);
  const nebulaChars = CHARACTERS.filter(c => c.faction === Faction.Nebula);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <LoreSection />
        
        <FactionSection 
          faction={Faction.Minamoto}
          characters={minamotoChars}
          title="미나모토 家"
          description="전통적인 무사 가문이자 신수 봉황을 모시는 명문가. 겉보기엔 완벽한 유전자를 가졌으나 실상은 개성 넘치는 형제들의 개판 5분 전 일상."
        />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10" />

        <FactionSection 
          faction={Faction.Nebula}
          characters={nebulaChars}
          title="네뷸라 (Nebula)"
          description="이세계인으로만 이루어진 특수 용병단. 마법과 테크놀로지가 결합된 하이브리드 무기를 사용하며 미나모토 가문의 강력한 라이벌."
        />

        <SystemSection />
      </main>

      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm tracking-widest">
            © 2114 SHIN-KOUSEI ROLEPLAY PROJECT. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-4 text-[10px] text-gray-700 uppercase tracking-[0.3em]">
            Developed with Excellence
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;