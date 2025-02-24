import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residences/residences.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: "", redirectTo: "residence", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "residence", component: ResidenceComponent },
  { path: "formresidence", component: FormresidenceComponent },
  { path: 'detailsresidence/:id', component: DetailsComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class ApproutingModule { }
