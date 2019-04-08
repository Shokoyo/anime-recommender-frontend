import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  private static readonly API_URL: string = 'http://' + (window.location.hostname === 'localhost' ? 'localhost' : 'waifu-wonderland.moe') + ':5000/api/v1.0/recommend/';
  recommendations: Anime[] = [];
  userName: string;
  source = 1;
  genreFilter: string[] = [];
  tagFilter: string[] = [];
  formatFilter = [1, 2, 3, 4, 5, 6, 7];
  n = 30;
  weightingType = 3;

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  getRecommendations(userName: string, source: number, n?: number, types?: [number],
                     genres?: [string], tags?: [string], weightingType?: number) {
    this.userName = userName;
    this.source = source;
    this.n = n;
    this.formatFilter = types;
    this.genreFilter = genres;
    this.tagFilter = tags;
    this.weightingType = weightingType;
    this.requestRecommendations();
  }

  requestRecommendations() {
    const url = RecommendationsService.API_URL + this.userName;
    const body = {
      'n': this.n,
      'types': this.formatFilter,
      'genres': this.genreFilter,
      'tags': this.tagFilter,
      'weighting_type': this.weightingType,
      'site': this.source
    };
    this.http.post(url, body).subscribe(
      (result: object) => {
        this.recommendations = [];
        result['data'].forEach( (value, i) => {
          this.db.collection('anime').doc('' + value[0]).get().toPromise().then(animeSnapshot => {
            const anime = animeSnapshot.data();
            anime.similarity = value[1];
            this.recommendations.push(anime as Anime);
          });
        });
      }
    );
  }
}
