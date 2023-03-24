import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})

export class IndexActorsComponent implements OnInit{
  constructor(private actorService: ActorsService){};

actors: actorDTO[] | any;
columnToDisplay = ['name', 'actions'];
totalAmountOfRecord: any;
currentPage : number = 1;
pageSize: number = 5;

  ngOnInit(): void {
      this.loadData();
  }

  loadData(){
    this.actorService.getActor(this.currentPage, this.pageSize).subscribe((response: HttpResponse<actorDTO[]>) => {
      this.actors = response.body;
      this.totalAmountOfRecord = response.headers.get("totalAmountOfRecord");
  });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  deleteActor(id: number){}


}
