import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit{

  constructor(private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
   this.activatedRouter.params.subscribe((params) => {
    alert(params['id']);
   });
  }


}
