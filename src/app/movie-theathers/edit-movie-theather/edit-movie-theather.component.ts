import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatherFormComponentDTO } from '../movie-theather-model';

@Component({
  selector: 'app-edit-movie-theather',
  templateUrl: './edit-movie-theather.component.html',
  styleUrls: ['./edit-movie-theather.component.css']
})
export class EditMovieTheatherComponent implements OnInit {

    constructor(private activatedRouter: ActivatedRoute){};

    model : movieTheatherFormComponentDTO = {name: 'Agora'};

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      alert(params['id']);
    });
  }

  saveChanges(movieTheather: movieTheatherFormComponentDTO){

  }

}
