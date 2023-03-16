import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { genreDTO } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL;

  getAll(): Observable<genreDTO[]>{
    return this.httpClient.get<genreDTO[]>(`${this.apiURL}genre/GetGenres`);
  }




}
