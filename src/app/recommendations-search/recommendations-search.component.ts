import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {RecommendationsService} from '../recommendations-service/recommendations.service';

export interface Source {
  value: number;
  name: string;
}

@Component({
  selector: 'app-recommendations-search',
  templateUrl: './recommendations-search.component.html',
  styleUrls: ['./recommendations-search.component.scss']
})

export class RecommendationsSearchComponent implements OnInit {

  recommendationsForm: FormGroup;
  router: Router;

  sources: Source[] = [
    {value: 1, name: 'Auto'},
    {value: 2, name: 'MyAnimeList'},
    {value: 3, name: 'AniList'},
    {value: 4, name: 'Proxer'}
  ];

  constructor(private fb: FormBuilder, _router: Router, private recommendationsService: RecommendationsService) {
    this.recommendationsForm = fb.group({
      'Username' : [null, Validators.required],
      'Source' : [1, Validators.required]
    });
    this.router = _router;
  }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.recommendationsService.getRecommendations(form['Username'], form['Source']);
    this.router.navigateByUrl('/recommendations');
  }
}
