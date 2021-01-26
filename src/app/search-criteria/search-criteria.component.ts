import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';

interface Movie {
//  poster_path: string;
//adult: boolean;
//overview: string;
//  release_date: string;
  genre_ids: number[];
//  id: number;
//  original_title: string;
//  original_language: string;
//  title: string;
//  backdrop_path: string;
//  popularity: number;
//  vote_count: number;
//  video: boolean;
  vote_average: number;
  runtime: number;
}


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  genre: number [] = [];
  rating: number = 0;
  runtime: number = 0;
  
  selectedGenre:string = "";
  data:Array<Object> = [
      {id: "35", name: "Comedy"},
      {id: "80", name: "Crime"},
      {id: "10749", name: "Romance"}
  ];
  selected(){
    
    console.log(this.selectedGenre,this.rating,this.runtime);
    //this.movieSearch.getMovies();
  }

  constructor(public movieSearch: MovieListService) { }

 // getFilteredResults(): Movie[] {
 //   return this.movies.filter((movie) => {
 //     return movie.task.toLowerCase().includes(this.filter.toLowerCase());
 //   });
 // }

  ngOnInit(): void {
  }

}
