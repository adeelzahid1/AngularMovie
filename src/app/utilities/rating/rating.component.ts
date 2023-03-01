import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})


export class RatingComponent implements OnInit{

@Input()
maxRating: number = 5;
// maxRatingArray : Array<number> = [];
@Input()
selectedRate: number = 0;
previousRate : number = 0;
maxRatingArray: any;

@Output()
onRating : EventEmitter<number> = new EventEmitter<number>();

ngOnInit(): void {
  this.maxRatingArray = Array(this.maxRating).fill(0);
}

handleMouseEnter(index: number){
  this.selectedRate = index + 1;
}

handleMouseLeave(){
   this.selectedRate = this.previousRate !== 0 ? this.previousRate : 0;
}

rate(index: number){
  this.selectedRate = index + 1;
  this.previousRate = this.selectedRate;
  this.onRating.emit(this.selectedRate);
}




}
