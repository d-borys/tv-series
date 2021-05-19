import {Show} from './show';

export interface Series {
  name?: string;
  season?: number;
  airstamp?: Date;
  airdate?: string;
  airtime?: string;
  id: number;
  show: Show;
  summary: string;
}
