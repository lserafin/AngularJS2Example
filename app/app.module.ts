import { FormsModule }         from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Logger }              from './logger.service';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieListComponent }   from './movie-list.component';
import { MovieService }         from './movie.service';
import { BackendService }      from './backend.service';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ 
    AppComponent,
    MovieDetailComponent,
    MovieListComponent, 
    ],
  bootstrap:    [ AppComponent ],
  providers: [ 
    BackendService,
    MovieService,
    Logger]
})
export class AppModule { }
