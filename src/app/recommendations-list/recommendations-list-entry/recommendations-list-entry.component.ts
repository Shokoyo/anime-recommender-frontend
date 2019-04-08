import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recommendations-list-entry',
  templateUrl: './recommendations-list-entry.component.html',
  styleUrls: ['./recommendations-list-entry.component.scss']
})
export class RecommendationsListEntryComponent implements OnInit {
  @Input() coverImage: string;
  @Input() title: string;
  @Input() id: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails() {
    this.router.navigateByUrl('/anime/' + this.id);
  }
}
