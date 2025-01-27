import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence'

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  search = ""

  searchName() {
    return this.listResidences.filter(r=>r.name.toLocaleLowerCase().includes(this.search.toLowerCase()))
   }
  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/4.jpg", status: "En Construction"}
   ];
 
   alert(residence:Residence) {
    if (residence.address == "inconnu") {
      alert("Adresse:Inconnu")
    }
    else {
      alert("Adresse:" + residence.address)
    }
   }

}
