import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { movieTheatherCreationDTO, movieTheatherDTO } from '../movie-theather-model';

@Component({
  selector: 'app-movie-theather-form',
  templateUrl: './movie-theather-form.component.html',
  styleUrls: ['./movie-theather-form.component.css']
})
export class MovieTheatherFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}
  form : FormGroup | any;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatherCreationDTO>();

  @Input()
  model: movieTheatherDTO | undefined;

  initialCoordinates : coordinatesMap[]=  []

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',
          { validators: [Validators.required]},
        ],
      longitude: ['',
        { validators: [Validators.required]},
      ],
      latitude: ['',
        { validators: [Validators.required]},
      ],
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  saveChanges(){
      this.onSaveChanges.emit(this.form.value);
      console.log(this.form.value);
  }

  onSelectedLocation(coordinates: coordinatesMap){
      this.form.patchValue(coordinates);
  }



}

