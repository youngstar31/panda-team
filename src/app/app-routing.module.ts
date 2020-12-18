import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Panda1Component } from './panda1/panda1.component';
import { Panda2Component } from './panda2/panda2.component';
import { Panda3Component } from './panda3/panda3.component';

const routes: Routes = [
  {path: 'home',
component: HomeComponent},
{path: 'pand1', 
component: Panda1Component},
{
  path: 'panda2',
  component: Panda2Component
},
{path: 'panda3',
component: Panda3Component},
{
  path: "", redirectTo: "home", pathMatch: "full"
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
