import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CinepolisRegisterComponent } from './cinepolis-register/cinepolis-register.component';
import { CinepolisHomeComponent } from './cinepolis-home/cinepolis-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { InputAssessmentComponent } from './input-assessment/input-assessment.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CinepolisRegisterComponent,
    CinepolisHomeComponent,
    UserListComponent,
    InputAssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
