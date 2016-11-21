import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Movie } from './movie';

const Movies = [
        new Movie('Inception', 'A movie with Leo'),
        new Movie('Titanic', 'Another movie with Leo'),
        new Movie('The Wolf of Wall Street', 'And another one')
      ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Movie) {
      // TODO get from the database
      return Promise.resolve<Movie[]>(Movies);
    }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}