import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    
import {HomeComponent} from './pages/home/home.component';
import {NuevoLibroComponent} from './pages/nuevo-libro/nuevo-libro.component';
import {InfantilComponent} from './pages/infantil/infantil.component';
import {TerrorComponent} from './pages/terror/terror.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'nuevo-Libro',component: NuevoLibroComponent},
  {path: 'infantil',component: InfantilComponent},
  {path: 'terror',component: TerrorComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
