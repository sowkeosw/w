export enum Faction {
  Minamoto = 'Minamoto',
  Nebula = 'Nebula'
}

export interface Character {
  id: string;
  name: string;
  kanjiName?: string;
  age?: string;
  height: string;
  role: string;
  faction: Faction;
  description: string;
  personality: string;
  likes: string;
  dislikes: string;
  features: string[];
  imgId: number;
  quote: string;
}

export interface WorldInfo {
  title: string;
  content: string[];
  imgId?: number;
}

export interface Keyword {
  command: string;
  description: string;
}