import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { BackendService } from './backend.service';
import { Logger } from './logger.service';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getMovies() {
    this.backend.getAll(Movie).then( (movies: Movie[]) => {
      this.logger.log(`Fetched ${movies.length} movies.`);
      this.movies.push(...movies); // fill cache
    });
    return this.movies;
  }
}