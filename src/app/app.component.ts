import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMovie';

  persons =   [
  {
    name: 'adeel',
    age: 26,
    interest: 'programming',
    dob: new Date()
  },
  {
    name: 'mohsin',
    age: 27,
    interest: 'database',
    dob: '2022-10-01'
  },

  ];


}
