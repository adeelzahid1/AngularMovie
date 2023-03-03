import { Component, EventEmitter, Output , Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/FirstLetterCapital';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent {
  constructor(private router: Router, private formbuilder: FormBuilder){}
  form: FormGroup | any;

  @Input()
  model: genreCreationDTO | any;

  @Output()
  onSaveChanges : EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();



  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', {
        validators: [
          Validators.required,
           Validators.minLength(3),
           Validators.maxLength(10),
           firstLetterUpperCase()
           ]
      }],
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
   }
  }

  SaveChanges(){
    // save genre : Todo
    console.log('save changes');
    this.onSaveChanges.emit(this.form.value);
     this.router.navigate(['/genres']);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'Name Field is Required';
    }
    if(field.hasError('minlength')){
      return 'The Min Length is 3';
    }
    if(field.hasError('firstLetterUpperCase')){
      return field.getError('firstLetterUpperCase').message;
    }
    return '';
  }

}
