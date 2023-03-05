import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie-theather',
  templateUrl: './create-movie-theather.component.html',
  styleUrls: ['./create-movie-theather.component.css']
})
export class CreateMovieTheatherComponent implements OnInit{

  ngOnInit(): void {

  }
  // saveChanges(movieTheather : CreateMovieTheatherComponent){
  saveChanges(movieTheather : any){
      console.log(movieTheather)
  }


}
