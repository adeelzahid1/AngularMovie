import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheatherCreationDTO, movieTheatherDTO } from './movie-theather-model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService implements OnInit{

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  private apiURL = environment.apiURL;


  public getMovieTheaters(): Observable<movieTheatherCreationDTO[]>{
    debugger;
    return this.httpClient.get<movieTheatherCreationDTO[]>(`${this.apiURL}movietheaters/GetMovieTheaters`);
  }

  public getMovieTheater(id: number): Observable<movieTheatherDTO>{
    return this.httpClient.get<movieTheatherDTO>(`${this.apiURL}movietheaters/GetMovieTheater/${id}`)
  }

  public SaveMovieTheater(movieTheater: movieTheatherCreationDTO){
    console.warn(movieTheater);
     return this.httpClient.post(`${this.apiURL}movietheaters/SaveMovieTheater`, movieTheater);
  }

  public EditMovieTheater(id: number, movietheaterDto: movieTheatherDTO){
    return this.httpClient.put(`${this.apiURL}movietheaters/UpdateMovieTheater/${id}`, movietheaterDto);
  }

  deleteMovieTheater(id: number){
    return this.httpClient.delete(`${this.apiURL}movietheaters/DeleteMovieTheater/${id}`);
  }




}
