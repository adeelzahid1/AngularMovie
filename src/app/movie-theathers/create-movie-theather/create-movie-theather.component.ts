import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheatherCreationDTO } from '../movie-theather-model';

@Component({
  selector: 'app-create-movie-theather',
  templateUrl: './create-movie-theather.component.html',
  styleUrls: ['./create-movie-theather.component.css']
})
export class CreateMovieTheatherComponent implements OnInit{

  constructor(private movieTheaterService: MovieTheatersService, private router: Router){}
  ngOnInit(): void {

  }
  // saveChanges(movieTheather : CreateMovieTheatherComponent){
  saveChanges(movieTheather : movieTheatherCreationDTO){
      console.log(movieTheather)
      this.movieTheaterService.SaveMovieTheater(movieTheather).subscribe(() => {
        this.router.navigate(['/movietheaters']);
      });
  }


}
