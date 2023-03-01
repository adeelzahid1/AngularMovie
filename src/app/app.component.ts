import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title : String= 'AngularMovie';
  moviesInTheaters : any | null;
  moviesInFutureRelease : any  | null;
  display: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
     this.moviesInTheaters = [
       {
         name: 'spider-man',
         age: 26,
         interest: 'programming',
         dob: new Date(),
         salery: 209.2000,
       },
       {
         name: 'golmal',
         age: 27,
         interest: 'database',
         dob: '2022-10-01',
         salery: 200.2000,
       },
     ]

     this.moviesInFutureRelease = [
       {
         name: 'golman 2',
         age: 26,
         interest: 'programming',
         dob: new Date(),
         salery: 209.2000,
       },
       {
         name: 'ok 2',
         age: 27,
         interest: 'database',
         dob: '2022-10-01',
         salery: 200.2000,
       },
     ]
    }, 200);
   }


  handleRating(rate: number){
    alert(`the user selected ${rate} Start `)
  }

  OnInputChange(event: any){
    console.log(typeof(event));
     console.log( event.target.value);
     this.title = event.target.value;
  }


}
