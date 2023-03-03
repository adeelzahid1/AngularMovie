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
  movies = [
    {title: 'Spider-Man', poster: 'https://images.pexels.com/photos/8421963/pexels-photo-8421963.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {title: 'Super-Man', poster: 'https://images.pexels.com/photos/10336820/pexels-photo-10336820.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {title: 'Moana', poster: 'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/X/X/XXL2-801.jpg'},
  ];

originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingRelease: false,
      inTheathers: false,
    });

    this.form.valueChanges.subscribe((value: any) => {
         console.log(value);
        this.movies = this.originalMovies;
        this.filterMovies(value);
    });
  }

  filterMovies(value: any){
    console.log('filter movies ' + value.title);
    if(value.title){
      this.movies = this.movies.filter((movie) => movie.title.indexOf(value.title) !== -1);
    }
  }


  clearFrom(){
    this.form.reset();
  }

}
