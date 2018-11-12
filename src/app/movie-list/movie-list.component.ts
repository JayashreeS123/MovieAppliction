import { Component, OnInit } from '@angular/core';

import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  searchValue;
  currentMovie: any;
  movies;

  ngOnInit() {
    // this.movies = this.movieService.getMovies();
    // console.log("all mv list=>", this.movies);

    this.movieService.config().subscribe(
      res => console.log('movielist==>', res)
      ,
      err => console.log('err >> ', err)
    );
  }

  searchMovie(searchValue) {
    this.movieService.getMovieByKeyword(searchValue).subscribe(
      res => {
        console.log(res);
        if (res)
          this.movies = res['results'];
      }

      ,
      err => console.log('err >> ', err)
    );
  }

  selectedMovie(movie) {
    console.log('movie selected => ', movie);
    //this.currentMovie = movie;
    // this.movieService.setCurrentSelectedMovie(movie);
    this.movieService.getMovieByMovieId(movie.id).subscribe(
      res => {
        console.log(res);
        if (res)
          this.currentMovie = res;
      }

      ,
      err => console.log('err >> ', err)
    );
  }

}
