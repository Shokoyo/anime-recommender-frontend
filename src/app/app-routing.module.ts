import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailPageComponent } from './anime-detail-page/anime-detail-page.component';
import { RecommendationsListComponent } from './recommendations-list/recommendations-list.component';
import { RecommendationsSearchComponent } from './recommendations-search/recommendations-search.component';

const routes: Routes = [
  { path: 'anime/:id', component: AnimeDetailPageComponent },
  { path: 'recommendations', component: RecommendationsListComponent},
  { path: '', component: RecommendationsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
