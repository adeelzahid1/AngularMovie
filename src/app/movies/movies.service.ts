import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviePostGetDto } from './movies-model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService  implements OnInit{

  constructor(private httpClient: HttpClient) { }
  private apiURL = environment.apiURL;

  ngOnInit(): void {

  }



  public PostGet(): Observable<MoviePostGetDto[]>{
    debugger;
    return this.httpClient.get<MoviePostGetDto[]>(`${this.apiURL}movies/PostGet`);
  }




}
