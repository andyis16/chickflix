import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


interface Response {
  results: Movie[];
  page: number;
}


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

@Injectable({
  providedIn: 'root'
})

export class MovieListService {
 //apiKey = "278eef542547b1e69799de454cfb534b";
 apiKey = "bec6ca9f47b7597b8806e211e6d91792";
  url = "https://api.themoviedb.org/3/discover/movie";
  movies: Movie[];
   
  constructor(private http: HttpClient) {}

  getMovies(genre:number,runtime:number,rating:number) {
    console.log(genre);
 
    const requestUrl =
      this.getUrlWithAPIKey() + "&with_genres=" + genre + "&with_runtime.lte="+runtime+"&vote_average.gte="+rating+"&sort_by=release_date.desc&page=1"; // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover
    console.log('requestURL:',requestUrl);
    this.http.get(requestUrl).subscribe(
      (response: Response) => {
        console.log(response.results);
        this.movies = response.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }

getUrlWithAPIKey() {
  return `${this.url}?api_key=${this.apiKey}&language=en-US`;
}
}