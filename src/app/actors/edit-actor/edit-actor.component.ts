import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit{

  constructor(private activatedRouter: ActivatedRoute){}

  model: actorDTO = {name: 'Jhon', dateOfBirth: new Date(), biography: 'default Value',
   picture: 'https://images.pexels.com/photos/9123067/pexels-photo-9123067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( (params) => {
        alert(params['id']);
    });
  }

  saveChanges(actorCreationDTO : actorCreationDTO){
      console.log(actorCreationDTO);
  }




}
