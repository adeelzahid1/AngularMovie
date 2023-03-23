import { Component, OnInit } from '@angular/core';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})

export class IndexActorsComponent implements OnInit{
  constructor(private actorService: ActorsService){};

actors: actorDTO[] = [];
columnToDisplay = ['name', 'actions'];

  ngOnInit(): void {
      this.actorService.getActor().subscribe((actors: actorDTO[]) => {
          this.actors = actors;
      });
  }

  deleteActor(id: number){}


}
