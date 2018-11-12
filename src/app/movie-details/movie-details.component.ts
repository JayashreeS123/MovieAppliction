import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() selectedMovie: any;
  baseUrl: 'https://api.themoviedb.org/3/';

  imageUrl = 'http://image.tmdb.org/t/p/w185/';

  constructor() {
   }

  ngOnInit() {
  }


}
