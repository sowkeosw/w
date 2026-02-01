import React from 'react';
import { Character, Faction } from '../types';
import CharacterCard from './CharacterCard';

interface Props {
  faction: Faction;
  characters: Character[];
  title: string;
  description: string;
}

const FactionSection: React.FC<Props> = ({ faction, characters, title, description }) => {
  const isMinamoto = faction === Faction.Minamoto;
  
  return (
    <section id={faction.toLowerCase()} className="py-20 relative scroll-mt-20">
      {/* Decorative Background Symbol */}
      <div className={`absolute top-0 ${isMinamoto ? 'right-0 text-red-900/10' : 'left-0 text-purple-900/10'} pointer-events-none select-none overflow-hidden h-full flex items-center`}>
         <span className="text-[20rem] md:text-[40rem] font-serif font-black leading-none opacity-20">
           {isMinamoto ? '源' : '星'}
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`mb-16 ${isMinamoto ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl md:text-6xl font-bold font-serif mb-4 ${isMinamoto ? 'text-minamoto-gold' : 'text-nebula-cyan'}`}>
            {title}
          </h2>
          <div className={`h-1 w-24 bg-current mb-4 inline-block ${isMinamoto ? 'bg-red-600' : 'bg-purple-600'}`} />
          <p className="text-gray-400 max-w-2xl text-lg ml-auto">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {characters.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionSection;