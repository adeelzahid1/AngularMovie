import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})

export class IndexGenresComponent implements OnInit{
  genres: genreDTO[]=[];
  columnToDisplay = ['name', 'actions'];

  constructor(private genreService : GenresService ){}

  ngOnInit(): void {

this.genreService.getAll().subscribe(
  {
    next: (genre) => {
      this.genres = genre;
      console.warn(this.genres);
    },
    error : (error) => {console.warn(error)},
    complete : () => {
      console.warn("done");

    },
     // doSomethingElse : ()
   },
 );


};



}
