import { Component, OnInit }   from '@angular/core';

import { Movie }                from './movie';
import { MovieService }         from './movie.service';

@Component({
  moduleId: module.id,
  selector:    'movie-list',
  templateUrl: '/app/movie-list.component.html',
  providers:  [ MovieService ]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.movies = this.service.getMovies();
  }

  selectMovie(movie: Movie) { this.selectedMovie = movie; }
}