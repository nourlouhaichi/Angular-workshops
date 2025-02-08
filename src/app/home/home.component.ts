import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Interpolation
  name = "Salut 4ARCTIC9"

  //Property Biding
  prop = false

  //Event Binding
  add(){
    console.log("ya3tik saha")
  }

  //To way data Bindinng
  nameuser = "ARCTIC"
}
