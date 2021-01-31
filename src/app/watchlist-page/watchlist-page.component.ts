import { Component, OnInit, Input } from '@angular/core';
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
  isShowing: boolean;
}

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  @Input() watchlistEntry;
  isShowing = false;
  // genre: number[] = [];
  // rating: number = 0;

  constructor(public movieService: MovieListService) {}

  removeFromWatchList(deleteIndex: number) {
    console.log(deleteIndex);
    this.movieService.watchlist.splice(deleteIndex, 1);
    console.log(this.movieService);
  }

  selectedMovie(watchlistEntry: Movie) {
    console.log('movieoverview:', watchlistEntry.overview);
    watchlistEntry.isShowing = !watchlistEntry.isShowing;
    return watchlistEntry.overview;
  }

  ngOnInit(): void {}
}
