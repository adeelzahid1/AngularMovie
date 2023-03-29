import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector';
import { movieCreationDTO, movieDTO } from '../movies-model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}
  form : FormBuilder|any;

  @Input()
  model: movieDTO | any;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  @Input()
  nonSelectedGenres : multipleSelectorModel[] =[];

  @Input()
  nonSelectedMovieTheaters : multipleSelectorModel[] =[];

  selectedGenre : multipleSelectorModel[] = [];
  selectedMovieTheaters : multipleSelectorModel[] = [];

  // nonSelectedGenres : multipleSelectorModel[] = [
  //   {key: 1, value: 'Drama'}, {key: 2, value: 'Action'}, {key: 3, value: 'Comedy'},
  // ];
  // nonSelectedMovieTheaters : multipleSelectorModel[] = [
  //   {key: 1, value: 'Agora'}, {key: 2, value: 'Sambil'}, {key: 3, value: 'Kohinoor'},
  // ];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {validators: [Validators.required]}],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    const genreIds = this.selectedGenre.map((x) => x.key);
    this.form.get('genresIds').setValue(genreIds);

    const movieIds = this.selectedMovieTheaters.map((x) => x.key);
    this.form.get('movieTheatersIds').setValue(movieIds);

    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: string){
    this.form.get('summary').setValue(content);
  }




}
