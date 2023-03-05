import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './utilities/map/map.component';



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
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MovieTheatherFormComponent } from './movie-theathers/movie-theather-form/movie-theather-form.component'
// import "leaflet/dist/images/marker-shadow.png";
// import 'leaflet/dist/images/marker-icon.png';



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
    FormGenreComponent,
    MoviesFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheatherFormComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
