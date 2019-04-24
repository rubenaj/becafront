import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {InfantilesComponent} from './pages/infantiles/infantiles.component';
import {TerrorComponent} from './pages/terror/terror.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'infantil',component: InfantilesComponent},
  {path: 'terror',component: TerrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
