import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../movies-list/movies';
import { UserSpaceService } from '../user-space.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  Likelist$: Observable<Movies[]>;

  constructor(private userlist: UserSpaceService) {
    this.Likelist$ = userlist.Likelist.asObservable();
   }

  RemoveToList(movie: Movies){
      this.userlist.RemoveToList(movie);
  } 
  ngOnInit(): void {
  }
  
  

}
