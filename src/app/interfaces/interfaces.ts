export interface RespuestaEpisode {
    info: Info;
    results: episode[];
  }
  
export interface episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }
  
export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }
//character

export  interface RespuestaCharacters {
    info: Info;
    results: character[];
  }
  
export  interface character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
export  interface Origin {
    name: string;
    url: string;
  }
  
export  interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }