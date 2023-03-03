import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit{

  // private router: Route
  constructor(private activatedRouter: ActivatedRoute,  ){}
  model: genreCreationDTO = {
    name: 'Drama'
  }

  ngOnInit(): void {
   this.activatedRouter.params.subscribe((params) => {
    alert(params['id']);
   });



  }

  SaveChanges(genreCreationDTO: genreCreationDTO){
    // save genre : Todo
    console.log('save changes');
    console.log(genreCreationDTO.name);
    // this.router.navigate(['/genres']);
  }


}
