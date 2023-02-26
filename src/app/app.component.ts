import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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



  title = 'AngularMovie';
  moviesInTheaters : any | null;
  moviesInFutureRelease : any  | null;


}
