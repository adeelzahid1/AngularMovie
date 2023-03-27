import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { genreCreationDTO, genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit{

  // private router: Route
  constructor(private activatedRouter: ActivatedRoute, private genreService: GenresService, private router: Router){}

  model: genreDTO | any;

  ngOnInit(): void {
   this.activatedRouter.params.subscribe((params) => {
    console.warn(params);
    alert(params['id']);
    this.genreService.getGenre(params['id']).subscribe((genre) => {
      console.error(genre);
        this.model = genre;
    });
   });



  }

  SaveChanges(genreCreationDTO: genreCreationDTO){
    // save genre : Todo
    console.log('save changes');
    console.log(genreCreationDTO.name);
    this.genreService.editGenre(this.model.id, genreCreationDTO).subscribe( () => {
        this.router.navigate(["/genres"]);
    });;
    // this.router.navigate(['/genres']);
  }


}
