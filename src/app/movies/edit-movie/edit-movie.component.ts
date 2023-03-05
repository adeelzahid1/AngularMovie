import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies-model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute){};
  model : movieDTO = {title: 'Spider Man', inTheaters: true, summary: 'What ever should be',  releaseDate: new Date, trailer: 'Abcd',
  poster: 'https://cdn.pixabay.com/photo/2023/01/05/22/35/flower-7700011_960_720.jpg'}
  @Input()

  @Output()

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) =>{
        alert(params['id']);
    });

  }

  onSaveChanges(movieCreationDTO: movieCreationDTO){
    console.log(movieCreationDTO);
  }



}
