import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatherFormComponentDTO } from '../movie-theather-model';

@Component({
  selector: 'app-movie-theather-form',
  templateUrl: './movie-theather-form.component.html',
  styleUrls: ['./movie-theather-form.component.css']
})
export class MovieTheatherFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}
  form : FormGroup | any;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatherFormComponentDTO>();

  @Input()
  model: movieTheatherFormComponentDTO | undefined;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required]}]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
      this.onSaveChanges.emit(this.form.value);
      console.log(this.form.value);
  }



}

