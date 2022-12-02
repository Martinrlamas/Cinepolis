import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movies } from './movies-list/movies';

@Injectable({
  providedIn: 'root'
})
export class UserSpaceService {
  [x: string]: any;

  private _Likelist: Movies[] = [];
  Likelist: BehaviorSubject<Movies[]> = new BehaviorSubject(this._Likelist);

  constructor() { }

  addToSpace(movie: Movies){
    let item: Movies = this._Likelist.find((v1)=>v1.title == movie.title)!;
    if(!item){
      this._Likelist.push({...movie});
      this.Likelist.next(this._Likelist);
    }
  }

  RemoveToList(movie: Movies){
    let indice = this._Likelist.indexOf(movie);
    if(indice >= 0){
      this._Likelist.splice(indice, 1);
    }
    this.Likelist.next(this._Likelist);
  }


}
