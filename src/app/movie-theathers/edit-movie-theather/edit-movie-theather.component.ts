import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheatherCreationDTO, movieTheatherDTO } from '../movie-theather-model';

@Component({
  selector: 'app-edit-movie-theather',
  templateUrl: './edit-movie-theather.component.html',
  styleUrls: ['./edit-movie-theather.component.css']
})
export class EditMovieTheatherComponent implements OnInit {

    constructor(private activatedRouter: ActivatedRoute,
       private movieTheaterService: MovieTheatersService, private router: Router){};

    model : movieTheatherDTO | any;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
     this.movieTheaterService.getMovieTheater(params['id']).subscribe((movieTheater) => {
        this.model = movieTheater;
     });
    });
  }

  saveChanges(movieTheather: movieTheatherCreationDTO){
    this.movieTheaterService.EditMovieTheater(this.model.id, movieTheather).subscribe( () => {
      this.router.navigate(['/movietheathers']);
    });
  }

}
