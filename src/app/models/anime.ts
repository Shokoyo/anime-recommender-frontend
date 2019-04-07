import {Tag} from './tag';

export class Anime {
  bannerImage: string;
  coverImage: {
    large: string,
    medium: string
  };
  format: string;
  genres: [string];
  id: number;
  idMal: number;
  meanScore: number;
  popularity: number;
  relations: [object];
  source: string;
  status: string;
  tags: [Tag];
  title: {
    english: string;
    native: string;
    romaji: string;
  }
}
