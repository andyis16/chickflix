import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {

  constructor(public movieService: MovieListService
              ) { }

  ngOnInit(): void {
    this.movieService.getMovies();
  }

}
