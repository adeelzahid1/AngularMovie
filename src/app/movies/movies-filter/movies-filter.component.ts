import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})

export class MoviesFilterComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}
  form: FormGroup | any;
  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'}];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingRelease: false,
      inTheathers: false,
    });
  }

  clearFrom(){

  }

}
