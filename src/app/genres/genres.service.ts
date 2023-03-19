import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { genreCreationDTO, genreDTO } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL;


  getAll(): Observable<genreDTO[]>{
    debugger;
    return this.httpClient.get<genreDTO[]>(`${this.apiURL}genre/GetGenres`);
  }

  getGenre(id: number): Observable<genreDTO>{
    debugger;
    return this.httpClient.get<genreDTO>(`${this.apiURL}genre/GetGenre/${id}`);
  }

  createGenre(genre: genreCreationDTO){
    debugger;
    return this.httpClient.post(`${this.apiURL}genre/SaveGenre`, genre)
  }

  editGenre(id : number, genre: genreCreationDTO): Observable<genreDTO>{
    debugger;
      return this.httpClient.put<genreDTO>(`${this.apiURL}genre/EditGenre/${id}`, genre);
      // return this.httpClient.put<genreDTO>(`${this.apiURL}genre/EditGenre/${id}`, genre);
  }

  deleteGenre(id: number){
    return this.httpClient.delete(`${this.apiURL}genre/DeleteGenre/${id}`);
  }



}
