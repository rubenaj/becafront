import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import { RubenComponent } from './pages/ruben/ruben.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'ruben' ,component: RubenComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
