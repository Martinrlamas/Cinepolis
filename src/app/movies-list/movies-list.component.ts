import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { UserSpaceService } from '../user-space.service';
import { Movies } from './movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movies[]= [];

  constructor(
    private userlist: UserSpaceService,
    private MoviesDataService: MoviesDataService ) { }

  ngOnInit(): void {
    this.MoviesDataService.getall()
    .subscribe(movies => this.movies = movies)
  }

  addToList(movie: Movies): void{
    this.userlist.addToSpace(movie);
  }
}
