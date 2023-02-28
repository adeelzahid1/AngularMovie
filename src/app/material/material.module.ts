import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
