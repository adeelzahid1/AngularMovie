import { Component,  OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit{

  form: FormGroup | any;

constructor(private router: Router, private formbuilder: FormBuilder){}
ngOnInit(): void {
  this.form = this.formbuilder.group({
    name: ['', {
      validators: [Validators.required, Validators.minLength(3)]
    }],
  });
}

SaveChanges(){
  // save genre : Todo
  console.log('save changes');
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
  return '';
}


}
