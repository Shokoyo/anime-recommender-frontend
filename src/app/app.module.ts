import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationsSearchComponent } from './recommendations-search/recommendations-search.component';
import { AnimeDetailPageComponent } from './anime-detail-page/anime-detail-page.component';
import { RecommendationsListComponent } from './recommendations-list/recommendations-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecommendationsService } from './recommendations-service/recommendations.service';
import { ResponsiveColumnsDirective } from './recommendations-list/responsive-columns.directive';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RecommendationsListEntryComponent } from './recommendations-list/recommendations-list-entry/recommendations-list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationsSearchComponent,
    AnimeDetailPageComponent,
    RecommendationsListComponent,
    ResponsiveColumnsDirective,
    RecommendationsListEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [RecommendationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
