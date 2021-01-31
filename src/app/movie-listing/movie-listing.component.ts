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
  runtime: number;
  isShow: boolean;
  isToggle: boolean;
}

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css'],
})
export class MovieListingComponent implements OnInit {
  public selectedMovie: any;
  isToggle = false;
  isShow = false;
  @Input() movie;

  constructor(public movieService: MovieListService) {}

  ngOnInit(): void {}

  addToWatchList(movie: Movie) {
    console.log(movie);
    console.log('toggle:', movie.isToggle);
    movie.isToggle = !movie.isToggle;
    if (!movie.isToggle) {
      /* Toggle color white*/
      let index = this.movieService.watchlist.findIndex(
        (m) => m.title === movie.title
      );
      console.log('index:', index);
      this.movieService.watchlist.splice(index, 1);
    } else {
      /* toggle color is RED */
      if (this.movieService.watchlist.includes(this.movie) == false) {
        console.log(
          'includeFlag:',
          this.movieService.watchlist.includes(this.movie)
        );

        this.movieService.watchlist.push(movie);
      }
    }

    console.log(this.movieService.watchlist);
  }

  selectMovie(movie: Movie) {
    console.log('movieoverview:', movie.overview);
    movie.isShow = !movie.isShow;
    return movie.overview;
  }
}
