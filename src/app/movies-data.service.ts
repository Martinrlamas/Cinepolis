import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './movies-list/movies';

const URL = 'https://638a5fb0c5356b25a219f4d1.mockapi.io/Movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http: HttpClient) { }
  


  public getall(): Observable<Movies[]>{
  
   return this.http.get<Movies[]>(URL);
  }

}
