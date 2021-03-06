import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {SignUpComponent} from './pages/sign-in/sign-up/sign-up.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {AnimeComponent} from './pages/anime/anime.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
