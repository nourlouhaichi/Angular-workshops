import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceroutingModule } from './annoncerouting.module';
import { AnnonceComponent } from './annonce.component';
import { ListannonceComponent } from './listannonce/listannonce.component';

@NgModule({
  declarations: [
    AnnonceComponent,
    ListannonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceroutingModule
  ]
})
export class AnnonceModule { }
