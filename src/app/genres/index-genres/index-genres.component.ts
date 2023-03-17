import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})

export class IndexGenresComponent implements OnInit{
  constructor(private genreService : GenresService ){}

  ngOnInit(): void {

    console.warn("Indexing INIT Called");

this.genreService.getAll().subscribe(
  {
    next: (genre) => { console.warn(genre);},
    error : (error) => {console.warn(error)},
    complete : () => {console.warn("done")},
     // doSomethingElse : ()
   },
 );


};



}
