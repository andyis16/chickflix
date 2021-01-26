import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
//import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    //MovieListComponent,
    MovieListingComponent,
    WatchlistPageComponent
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
