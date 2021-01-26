import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
// import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

const routes: Routes = [
  {path: "search-criteria", component: SearchCriteriaComponent},
  {path: "watchlist-page", component: WatchlistPageComponent}, 
  {path: "", component: SearchCriteriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
