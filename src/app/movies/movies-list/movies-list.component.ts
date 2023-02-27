import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit{

  ngOnInit(): void {
  }

  @Input()
  movies: any | null;


  Remove(index: number, movie: any){
    this.movies.splice(index, 1);
    console.warn(index);
  }
}
