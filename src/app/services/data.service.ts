import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaCharacters, RespuestaEpisode } from '../interfaces/interfaces';
import { DataLocalService } from './data-local.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(public http: HttpClient, private localStorageSvc: DataLocalService) {  }

  getCharacters() {
    return this.http.get<RespuestaCharacters>(`https://rickandmortyapi.com/api/character`);
  }
  getEpisodes() {
    return this.http.get<RespuestaEpisode>(`https://rickandmortyapi.com/api/episode`);
  }


}

