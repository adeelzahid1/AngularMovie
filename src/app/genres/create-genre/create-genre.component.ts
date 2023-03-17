import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit{


 constructor(private router: Router, private genreService: GenresService){}
ngOnInit(): void {}

SaveChanges(genreCreationDTO: genreCreationDTO){
  debugger;
  console.log('save changes');
  console.warn(genreCreationDTO);
  this.genreService.createGenre(genreCreationDTO).subscribe(
     {
       next: () => { },
       error : (error) => {console.warn(error)},
       complete : () => {
        console.log("Record Added Successfully ...");
        this.router.navigate(['/genres']);
       },
        // doSomethingElse : ()
      },
    );

}




}






// return {
//   connect: (stream$: Observable<T>) => {
//     innerStream$ = stream$.pipe(takeUntil(unsub$));
//     return context;
//   },
//   subscribe(
//     next?: (value: T) => void,
//     error?: (e: any) => void,
//     complete?: () => void
//   ): Subscription {
//     return innerStream$
//       .pipe(takeUntil(unsubscribe$))
//       .subscribe(next, error, complete);
//   },
// };
