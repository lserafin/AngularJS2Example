import { Component, Input } from '@angular/core';

import { Movie } from './movie';

@Component({
  moduleId: module.id,
  selector: 'movie-detail',
  templateUrl: '/app/movie-detail.component.html'
})
export class MovieDetailComponent {
  @Input() movie: Movie;
}