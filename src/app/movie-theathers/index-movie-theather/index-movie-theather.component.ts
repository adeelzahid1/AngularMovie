import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-index-movie-theather',
  templateUrl: './index-movie-theather.component.html',
  styleUrls: ['./index-movie-theather.component.css']
})
export class IndexMovieTheatherComponent implements OnInit{

  constructor(private movieTheaterService: MovieTheatersService){}
  columnToDisplay = ['name', 'actions'];
  movieTheater : any;
  ngOnInit(): void {
    this.loadMovieTheater();
  }
  loadMovieTheater(){
    this.movieTheaterService.getMovieTheaters().subscribe((movieTheaters) => {
      this.movieTheater = movieTheaters;
    });
  }


  deleteGenre(id: number){
    console.warn(id);
    this.movieTheaterService.deleteMovieTheater(id).subscribe(() => {
      this.loadMovieTheater();
    });
  }



}
