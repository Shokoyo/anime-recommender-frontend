import { Component, OnInit } from '@angular/core';
import { RecommendationsService} from '../recommendations-service/recommendations.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recommendations-list',
  templateUrl: './recommendations-list.component.html',
  styleUrls: ['./recommendations-list.component.scss']
})
export class RecommendationsListComponent implements OnInit {

  constructor(private recommendationsService: RecommendationsService, private router: Router) {  }

  ngOnInit() {
    if (this.recommendationsService.recommendations.length === 0 && this.recommendationsService.userName === undefined) {
      this.router.navigateByUrl('/');
    }
  }

}
