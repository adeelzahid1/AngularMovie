import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifeCycleTestComponent } from './life-cycle-test/life-cycle-test.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheatherComponent } from './movie-theathers/index-movie-theather/index-movie-theather.component';
import { CreateMovieTheatherComponent } from './movie-theathers/create-movie-theather/create-movie-theather.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheatherComponent } from './movie-theathers/edit-movie-theather/edit-movie-theather.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifeCycleTestComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexMovieTheatherComponent,
    CreateMovieTheatherComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMovieTheatherComponent,
    EditMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
