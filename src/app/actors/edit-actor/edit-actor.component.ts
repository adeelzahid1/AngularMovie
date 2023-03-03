import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit{

  constructor(private activatedRouter: ActivatedRoute){}

  model: actorCreationDTO = {name: 'Jhon', dateOfBirth: new Date()};

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( (params) => {
        alert(params['id']);
    });
  }

  saveChanges(actorCreationDTO : actorCreationDTO){
      console.log(actorCreationDTO);
  }




}
