import React from 'react';
import { Character, Faction } from '../types';
import { IMAGE_BASE_URL } from '../constants';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const isMinamoto = character.faction === Faction.Minamoto;
  const accentColor = isMinamoto ? 'border-red-900/50 group-hover:border-red-600' : 'border-purple-900/50 group-hover:border-purple-500';
  const textColor = isMinamoto ? 'text-red-400' : 'text-purple-400';
  const badgeBg = isMinamoto ? 'bg-red-950/50 text-red-200' : 'bg-purple-950/50 text-purple-200';

  return (
    <div className={`group relative bg-panel-bg border ${accentColor} transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-full md:h-[420px]`}>
      
      {/* Image Section */}
      <div className="w-full md:w-2/5 h-80 md:h-full relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-transparent to-transparent z-10 opacity-60`} />
        <img 
          src={`${IMAGE_BASE_URL}${character.imgId}.webp`} 
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Kanjo Name Overlay */}
        {character.kanjiName && (
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-4xl font-serif text-white/10 font-bold writing-vertical-rl select-none pointer-events-none group-hover:text-white/30 transition-colors">
              {character.kanjiName}
            </h3>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/5 p-6 flex flex-col relative z-20">
        
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className={`text-xs font-bold uppercase tracking-widest ${textColor} mb-1 block`}>
                {character.role}
              </span>
              <h3 className="text-2xl font-bold text-white font-serif">{character.name}</h3>
            </div>
            <span className={`text-xs px-2 py-1 rounded border border-white/10 ${badgeBg}`}>
              {character.age}
            </span>
          </div>
          <div className="w-12 h-1 bg-white/20 rounded-full group-hover:w-full transition-all duration-500" />
        </div>

        {/* Scrollable Description */}
        <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            {character.description}
          </p>

          <div className="space-y-3 pt-2">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">성격</span>
              <p className="text-sm text-gray-300">{character.personality}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">좋아함</span>
                <p className="text-xs text-gray-300">{character.likes}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">싫어함</span>
                <p className="text-xs text-gray-300">{character.dislikes}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 pt-1">
              {character.features.map((tag, idx) => (
                <span key={idx} className="text-[10px] px-2 py-1 bg-white/5 text-gray-400 rounded-sm border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Footer */}
        <div className={`mt-4 pt-4 border-t border-white/10 italic text-sm ${textColor} opacity-80`}>
          "{character.quote}"
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
