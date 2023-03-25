import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { movieTheatherCreationDTO } from './movie-theather-model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService implements OnInit{

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  private apiURL = environment.apiURL;


  // getMovieTheaters(): Observable<movieTheatherCreationDTO[]>{
  //   debugger;
  //   return this.httpClient.get<movieTheatherCreationDTO[]>(`${this.apiURL}movietheaters/GetMovieTheaters`);
  // }

  public SaveMovieTheater(movieTheater: movieTheatherCreationDTO){
    return this.httpClient.post(`${this.apiURL}movietheaters/SaveMovieTheater`, movieTheater);
  }





}
