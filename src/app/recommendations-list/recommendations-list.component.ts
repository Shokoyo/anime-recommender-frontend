import { Component, OnInit } from '@angular/core';
import { RecommendationsService} from '../recommendations-service/recommendations.service';

@Component({
  selector: 'app-recommendations-list',
  templateUrl: './recommendations-list.component.html',
  styleUrls: ['./recommendations-list.component.scss']
})
export class RecommendationsListComponent implements OnInit {

  constructor(private recommendationsService: RecommendationsService) {  }

  ngOnInit() {
  }

}
