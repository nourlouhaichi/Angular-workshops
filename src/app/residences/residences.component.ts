import { Component, OnInit } from '@angular/core'
import { Residence } from 'src/core/models/residence'
import { ResidenceService } from '../service/residence.service'

@Component({
  selector: 'app-residence',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidenceComponent implements OnInit {

  search = ""

  num!:number

  listserviceresidence:Residence[]=[]

  searchName() {
    return this.listserviceresidence.filter(r=>r.name.toLocaleLowerCase().includes(this.search.toLowerCase()))
  }

  constructor(private reservice:ResidenceService){}
  ngOnInit(): void {
    this.reservice.getallResidence().subscribe((data)=>{
      this.listserviceresidence=data
    })
  }
  
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

  shownumber(){
    return this.num=this.reservice.getnumberinlist(this.listResidences, "name", "El Arij" )
  }

  deleteResidence(id:any){
    this.reservice.deleteResidence(id).subscribe(()=>{console.log('deleted')
      //window.location.reload()
      this.ngOnInit()
    } )
  }

}