import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-formresidence',
  templateUrl: './formresidence.component.html',
  styleUrls: ['./formresidence.component.css']
})
export class FormresidenceComponent implements OnInit {
  formR!:FormGroup
  ngOnInit(): void {
    this.formR = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]), 
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]/)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern(/^Disponible+$/)])
    });
  }
  
  constructor(private reservice:ResidenceService,
    private router: Router
  ){}

  residenceId: string | null = null

  addResidence(){  
    this.reservice.addResidence(this.formR.value).subscribe(() => {
      console.log('added');
      this.router.navigate(['/residence']);
    });

  }

  add() {
    console.log('my form : ' +  JSON.stringify(this.formR.value));
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
