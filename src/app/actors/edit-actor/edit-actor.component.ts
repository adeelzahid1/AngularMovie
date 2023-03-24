import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit{

  constructor(private activatedRouter: ActivatedRoute, private actorService: ActorsService, private router: Router){}

  // model: actorDTO = {id: 1,name: 'Jhon', dateOfBirth: new Date(), biography: 'default Value',
  //  picture: 'https://images.pexels.com/photos/9123067/pexels-photo-9123067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

  model: actorDTO | any;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( (params) => {
        //alert(params['id']);
        this.actorService.getActorById(params['id']).subscribe(
          (actor) => {
            console.log(actor);
            this.model = actor;
          }
          );
    });
  }

  saveChanges(actorCreationDTO : actorCreationDTO){
      console.log(actorCreationDTO);
      debugger;
      this.actorService.updateActor(this.model.id, actorCreationDTO).subscribe(() => {
        this.router.navigate(['/actors']);
      });
  }




}
