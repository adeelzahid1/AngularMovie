import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { actorCreationDTO, actorDTO } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL;

  getActor(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordPerPage', recordsPerPage.toString());


    return this.http.get<actorDTO[]>(`${this.apiURL}actors/GetActors`, {observe: 'response', params} );
  }

  createActor(actor : actorCreationDTO){
    const formDate = this.buildFormData(actor);
    return this.http.post(`${this.apiURL}actors/SaveActor`, formDate);
  }

  private buildFormData(actor: actorCreationDTO): FormData{
    const formData = new FormData();
    formData.append('name', actor.name);

    if(actor.biography){
      formData.append('biography', actor.biography)
    }

    if(actor.dateOfBirth){
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if(actor.picture){
      formData.append('picture', actor.picture);
    }

    return formData;
  }



}
