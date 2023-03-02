import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheatherComponent } from './movie-theathers/create-movie-theather/create-movie-theather.component';
import { EditMovieTheatherComponent } from './movie-theathers/edit-movie-theather/edit-movie-theather.component';
import { IndexMovieTheatherComponent } from './movie-theathers/index-movie-theather/index-movie-theather.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},
  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},
  {path: 'movietheathers', component: IndexMovieTheatherComponent},
  {path: 'movietheathers/create', component: CreateMovieTheatherComponent},
  {path: 'movietheathers/edit/:id', component: EditMovieTheatherComponent},
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
