import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisHomeComponent } from './cinepolis-home/cinepolis-home.component';
import { CinepolisRegisterComponent } from './cinepolis-register/cinepolis-register.component';

const routes: Routes = [
  {
      path: '',
      redirectTo:'movies',
      pathMatch: 'full'
  },
  {
    path: 'movies',
    component: CinepolisHomeComponent,
  },
  {
    path: 'register',
    component: CinepolisRegisterComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
