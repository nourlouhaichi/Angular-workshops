import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service'
import { Residence } from 'src/core/models/residence'
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  idupdate!:number
  constructor(private act:ActivatedRoute, private reservice:ResidenceService, private route:Router){}
  formR!:FormGroup
  listupdateresidence:Residence = new Residence
  ngOnInit(): void {
    this.idupdate=this.act.snapshot.params["id"]
    this.formR = new FormGroup({
          id: new FormControl('', [Validators.required, Validators.minLength(1)]), 
          name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]/)]),
          address: new FormControl('', [Validators.required, Validators.maxLength(30)]),
          image: new FormControl('', Validators.required),
          status: new FormControl('', [Validators.required, Validators.pattern(/^Disponible+$/)])
        });
        
        this.reservice.getResidence(this.idupdate).subscribe((data)=>{
          this.listupdateresidence=data
          console.log(this.listupdateresidence)
          this.formR.patchValue(this.listupdateresidence as any)
        })
  }
  
  update(){
    //this.reservice.updateResidence(this.formR.value,this.idupdate).subscribe()
    this.reservice.updateResidence(this.formR.value,this.idupdate).subscribe(() => {
      console.log('modified');
      this.route.navigate(['/residence']);
    });

  }

  get id() {
    return this.formR.get('id')
  }

  get name() {
    return this.formR.get('name')
  }

  get address() {
    return this.formR.get('address')
  }

  get status() {
    return this.formR.get('status')
  }

}
