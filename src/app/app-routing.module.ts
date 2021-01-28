import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
// import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

const routes: Routes = [
  {path: "", component: SearchCriteriaComponent},
   {path: "search-criteria", component: SearchCriteriaComponent},
  {path: "watchlist-page", component: WatchlistPageComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
