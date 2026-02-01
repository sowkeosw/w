import React from 'react';
import { IMAGE_BASE_URL } from '../constants';

const Hero: React.FC = () => {
  const scrollToWorld = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('world');
    if (element) {
      // 윈도우 스크롤을 이용해 해당 위치로 부드럽게 이동
      const offsetTop = element.offsetTop - 80; // 네비게이션 높이 고려
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505] z-10" />
        <img 
          src={`${IMAGE_BASE_URL}36.webp`} 
          alt="Shin-Kousei Background" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block px-4 py-1 border border-white/30 rounded-full bg-black/50 backdrop-blur-sm">
          <span className="text-red-500 font-bold text-xs md:text-sm tracking-[0.2em] uppercase">Romance • Comedy • Adult RP</span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-2 tracking-tighter drop-shadow-2xl">
          新-皇成
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-300 font-light mb-8 tracking-[0.5em] uppercase">
          Shin-Kousei 2114
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
          전통과 첨단 기술, 인간과 이세계인이 공존하는 혼돈의 도시.<br className="hidden md:block"/>
          무사 가문 <strong>미나모토</strong>와 용병단 <strong>네뷸라</strong>의 충돌.<br/>
          그 속에서 펼쳐지는 자극적이고 유쾌한 로맨스.
        </p>

        <button 
          onClick={scrollToWorld}
          className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm overflow-hidden rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] cursor-pointer"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-600 rounded-full group-hover:w-80 group-hover:h-80 opacity-20"></span>
          <span className="relative">세계관 입장</span>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;