import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ResidenceComponent } from './residences/residences.component'
import { NotfoundComponent } from './notfound/notfound.component'
import { ApproutingModule } from './approuting.module'
import { AnnonceModule } from './annonce/annonce.module'
import { FormresidenceComponent } from './formresidence/formresidence.component'
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ResidenceComponent,
    NotfoundComponent,
    FormresidenceComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
    AnnonceModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
