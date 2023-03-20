import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreationDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})

export class CreateActorComponent {

  constructor(private actorService: ActorsService, private router: Router){}

  saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO);

    this.actorService.createActor(actorCreationDTO).subscribe( () => {
      this.router.navigate(['/actors']);
    });

  }


}
