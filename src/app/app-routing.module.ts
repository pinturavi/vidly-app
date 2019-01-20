import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviesComponent } from './movies/movies.component';
import { CustomersComponent } from './customers/customers.component';
import { GenresComponent } from './genres/genres.component';
import { RentalsComponent } from './rentals/rentals.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'rentals', component: RentalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
