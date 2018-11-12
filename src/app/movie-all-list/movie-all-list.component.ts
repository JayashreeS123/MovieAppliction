import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-all-list',
  templateUrl: './movie-all-list.component.html',
  styleUrls: ['./movie-all-list.component.css']
})
export class MovieAllListComponent implements OnInit {

  movieList: any;
  currentMovie: any;
  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieList = this.movieService.getMovies();
    console.log("all mv list=>", this.movieList);
  }

  selectedMovie(movie) {
    console.log("movie selected => ", movie);
    this.currentMovie = movie;
    // this.movieService.setCurrentSelectedMovie(movie);
  }

}
