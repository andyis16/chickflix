import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';

interface Movie {
   poster_path: string;
   adult: boolean;
   overview: string;
   release_date: string;
   genre_ids: number[];
   id: number;
   original_title: string;
   original_language: string;
   title: string;
   backdrop_path: string;
   popularity: number;
   vote_count: number;
   video: boolean;
   vote_average: number;
  }

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
  public movies: Movie[];
  genre: number [] = [];
  rating: number = 0;

  constructor(public movieService: MovieListService) { 
    this.watchlistEntries = [
      {title: "",  }

    ];
  }

  // addToWatchList(event) {
  //   const watchlist = this.watchlist;
  //   this.movies.push({movieListing.id});  }

  // removeFromWatchList(event) {
  //   const id = event
  //   const deleteIndex = this.movies.findIndex(function(movie) {
  //     return movie.id === id;
  //   });
  //   this.movies.splice(deleteIndex, 1);
  // }

  ngOnInit(): void {
  }

}
