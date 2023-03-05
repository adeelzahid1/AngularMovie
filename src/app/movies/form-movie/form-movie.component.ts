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

  nonSelectedGenre : multipleSelectorModel[] = [
    {key: 1, value: 'Drama'}, {key: 2, value: 'Action'}, {key: 3, value: 'Comedy'},
  ];

  selectedGenre : multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {validators: [Validators.required]}],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: ''
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    const genreIds = this.selectedGenre.map((x) => x.key);
    this.form.get('genresIds').setValue(genreIds);
    this.onSaveChanges.emit(this.form.value);
  }
  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: string){
    console.log(content);
    console.log();
    this.form.get('summary').setValue(content);
  }


}
