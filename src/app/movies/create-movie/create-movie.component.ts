import { Component, OnInit } from '@angular/core';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector';
import { movieCreationDTO } from '../movies-model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit{

  constructor(private movieService: MoviesService){}
  nonSelectedGenres : multipleSelectorModel[] | any;
  nonSelectedMovieTheaters: multipleSelectorModel[] | any;

  ngOnInit(): void {
    this.movieService.PostGet().subscribe( (response: any) => {

      this.nonSelectedGenres = response.genres.map( (genre: any) => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.nonSelectedMovieTheaters = response.movieTheater.map( (movieTheater: any) => {
        return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });


    });
  }

  saveChanges(movie: movieCreationDTO){
      console.log(movie);
  }
}
