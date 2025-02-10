import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residences/residences.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AnnonceComponent } from './annonce/annonce.component';

const routes: Routes = [
  { path: "", redirectTo: "residence", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "residence", component: ResidenceComponent },
  
  //{ path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class ApproutingModule { }
