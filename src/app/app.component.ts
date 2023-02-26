import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    setTimeout(() => {
      this.persons =   [
        {
          name: 'adeel',
          age: 26,
          interest: 'programming',
          dob: new Date(),
          salery: 299.2000,
        },
        {
          name: 'mohsin',
          age: 27,
          interest: 'database',
          dob: '2022-10-01',
          salery: 200.2000,
        },
        ];
    }, 200);
  }

  persons: any | null;

  title = 'AngularMovie';




}
