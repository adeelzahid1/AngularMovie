import { Component, Input, OnInit } from '@angular/core';

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

ngOnInit(): void {
  console.log('INIT');
  this.maxRatingArray = Array(this.maxRating).fill(0);
}

handleMouseEnter(index: number){
  this.selectedRate = index + 1;
  console.log(` Mouse Enter >> rate ${this.selectedRate}  , index ${index+1}`)

}

handleMouseLeave(){
  console.log(`mouse leave : rate ${this.previousRate} `)
  debugger;
  if(this.previousRate !== 0){
    this.selectedRate = this.previousRate;
  }
  else{
    this.selectedRate = 0;
  }

  console.log(this.selectedRate);
  // this.selectedRate = this.previousRate !== 0 ? this.previousRate : 0;
  // alert(this.selectedRate);
}

rate(index: number){
  this.selectedRate = index + 1;
  this.previousRate = this.selectedRate;
}


}
