import { Component, EventEmitter, OnInit, Output , Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit{

  constructor(private formBuilder : FormBuilder){}
  form: FormGroup | any;
  @Input()
  model: actorCreationDTO | any;

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: '',
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value)
  }

  onImageSelected(image : File){
    this.form.get('picture').setValue(image);
  }

  changeMarkDown(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.form.get('biography').setValue(filterValue);
  }



}
