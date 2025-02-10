import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence'
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidenceComponent {

  search = ""

  searchName() {
    return this.listResidences.filter(r=>r.name.toLocaleLowerCase().includes(this.search.toLowerCase()))
  }

  constructor(private reservice:ResidenceService){}
  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/4.jpg", status: "En Construction"}
  ];

  listFavoris:Residence[]=[];
 
  alert(residence:Residence) {
    if (residence.address == "inconnu") {
      alert("Adresse:Inconnu")
    }
    else {
      alert("Adresse:" + residence.address)
    }
  }

  addListFavoris(residence:Residence) {
    const index = this.listFavoris.findIndex(r=>r.id==residence.id)
    if (index>-1){
      this.listFavoris.splice(index,1)
    }
    else {
      this.listFavoris.push(residence)
      console.log("Ma liste de favoris: "+ JSON.stringify(this.listFavoris))
    }
  }

  isVerif(residence:Residence) {
    return this.listFavoris.some(r=>r.id==residence.id)
  }

  /*changeStatus(residence:Residence) {
    if (residence.status == "Disponible") {
      return "Ce batiment est disponible"
    }
    else if (residence.status == "En Construction") {
      return "Ce batiment est en cours de construction"
    }
    else {
      return "Ce batiment est vendu"
    }
  }*/
}