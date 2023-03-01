import { getLocaleDateFormat } from '@angular/common';
import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.css']
})
export class LifeCycleTestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{

  //constructor  is not a life cycle event, mainly used for injecting services
  constructor(){}


  @Input()
  title : String | null = "";

  @ViewChild(RatingComponent)
  rating: any;

  timer : ReturnType <typeof setInterval> | any;

  ngOnInit(): void {
   console.log('On In IT');
   console.log(this.rating);
   this.timer = setInterval(() => {
    console.log(new Date().getSeconds());
   }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('On Do Check');
  }
  ngAfterViewInit(): void {
    console.log('On After View In It');
    console.log(this.rating);
  }





}
