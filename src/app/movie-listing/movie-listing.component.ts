import { Component, OnInit, Input } from '@angular/core';
import { MovieListService } from '../movie-list.service';

interface Movie {
  //  poster_path?: string;
  // adult?: boolean;
  overview: string;
  //  release_date?: string;
    // genre_ids: number[];
  //  id?: number;
  //  original_title?: string;
  //  original_language?: string;
   title: string;
  //  backdrop_path?: string;
  //  popularity?: number;
  //  vote_count?: number;
  // video?: boolean;
    vote_average: number;
    runtime:number;
    isShow:boolean;
  }

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {
  public selectedMovie: any;
  isShow = false;
  @Input() movie;

  constructor(public movieService: MovieListService) { }

  ngOnInit(): void {
   // this.movieService.getMovies();
  }

  addToWatchList(movie: Movie) {
    console.log(movie);
    this.movieService.watchlist.push(movie);
    console.log(this.movieService.watchlist);
  }


  selectMovie(movie:Movie) {
    console.log('movieoverview:',movie.overview);
     movie.isShow = !movie.isShow;
     return movie.overview;
  }
}
