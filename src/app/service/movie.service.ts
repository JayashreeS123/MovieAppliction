import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = 'https://api.themoviedb.org/3/';
  selectedMovie;

  constructor(public http: HttpClient) { }

  movies: any = [
    { title: 'abc', director: 'John' },
    { title: 'xyz', director: 'Mark' },
    { title: 'mno', director: 'Rick' },
    { title: 'kol', director: 'Nick' }
  ];

  getMovies() {
    return this.movies;
  }

  setCurrentSelectedMovie(movie) {
    this.selectedMovie = movie;
  }

  config(): Observable<any> {
    return this.http.get(this.baseUrl + 'configuration');
  }

  getMovieByKeyword(movieName) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('query', movieName);

    return this.http.get(this.baseUrl + 'search/movie', { params: httpParams });
  }

  getMovieByMovieId(movieId) {
    return this.http.get(this.baseUrl + 'movie/' + movieId);
  }
}
