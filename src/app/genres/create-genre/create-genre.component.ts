import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit{

constructor(private router: Router){}
ngOnInit(): void {}

SaveChanges(genreCreationDTO: genreCreationDTO){
  // save genre : Todo
  console.log('save changes');
  console.log(genreCreationDTO.name);
  this.router.navigate(['/genres']);
}



}
