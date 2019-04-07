import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationsSearchComponent } from './recommendations-search/recommendations-search.component';
import { AnimeDetailPageComponent } from './anime-detail-page/anime-detail-page.component';
import { RecommendationsListComponent } from './recommendations-list/recommendations-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RecommendationsService} from './recommendations-service/recommendations.service';
import {ResponsiveColumnsDirective} from './recommendations-list/responsive-columns.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationsSearchComponent,
    AnimeDetailPageComponent,
    RecommendationsListComponent,
    ResponsiveColumnsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RecommendationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
