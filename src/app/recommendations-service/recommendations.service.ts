import { Injectable } from '@angular/core';
import {Anime} from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  recommendations: [Anime];
  userName: string;
  source: number;
  genreFilter: [string];
  formatFilter: string;
  private static readonly API_URL: string = "localhost:5000/recommend"

  constructor() { }
}
