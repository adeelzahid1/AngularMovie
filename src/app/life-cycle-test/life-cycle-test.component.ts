import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.css']
})
export class LifeCycleTestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{

  //constructor  is not a life cycle event, mainly used for injecting services
  constructor(){}

  @Input()
  title : String = "";

  ngOnInit(): void {
   console.log('On In IT');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
  }
  ngDoCheck(): void {
    console.log('On Do Check');
  }
  ngAfterViewInit(): void {
    console.log('On After View In It');
  }





}
