import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  moviesInTheaters : any | null;
  moviesInFutureRelease : any  | null;

  ngOnInit(): void {
    setTimeout(() => {
     this.moviesInTheaters = [
       {
         title: 'Spider-Man',
         genre: 'Action',
         releaseDate: new Date(),
         price: 209.2000,
         poster: 'https://images.pexels.com/photos/8421963/pexels-photo-8421963.jpeg?auto=compress&cs=tinysrgb&w=600'
       },
       {
         title: 'Super-Man',
         genre: 'Action',
         releaseDate: '2022-10-01',
         price: 200.2000,
         poster: 'https://images.pexels.com/photos/10336820/pexels-photo-10336820.jpeg?auto=compress&cs=tinysrgb&w=600'
       },
     ]

     this.moviesInFutureRelease = [
      {
        title: 'Spider-Man',
        genre: 'Action',
        releaseDate: new Date(),
        price: 209.2000,
        poster: 'https://images.pexels.com/photos/8421963/pexels-photo-8421963.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        title: 'Super-Man',
        genre: 'Action',
        releaseDate: '2022-10-01',
        price: 200.2000,
        poster: 'https://images.pexels.com/photos/10336820/pexels-photo-10336820.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
     ]
    }, 200);
   }

}
