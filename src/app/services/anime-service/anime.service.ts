import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Anime} from '../../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private db: AngularFirestore) { }

  getAnime(id: string) {
    return this.db.doc<Anime>('anime/' + id).valueChanges();
  }
}
