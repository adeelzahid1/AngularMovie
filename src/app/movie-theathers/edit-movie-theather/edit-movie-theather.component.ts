import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatherCreationDTO, movieTheatherDTO } from '../movie-theather-model';

@Component({
  selector: 'app-edit-movie-theather',
  templateUrl: './edit-movie-theather.component.html',
  styleUrls: ['./edit-movie-theather.component.css']
})
export class EditMovieTheatherComponent implements OnInit {

    constructor(private activatedRouter: ActivatedRoute){};

    model : movieTheatherDTO = {name: 'Agora', latitude: 31.404711078754563, longitude: 73.1239700317383};

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      alert(params['id']);
    });
  }

  saveChanges(movieTheather: movieTheatherCreationDTO){

  }

}
