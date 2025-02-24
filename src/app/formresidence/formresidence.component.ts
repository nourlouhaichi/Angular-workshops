import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formresidence',
  templateUrl: './formresidence.component.html',
  styleUrls: ['./formresidence.component.css']
})
export class FormresidenceComponent implements OnInit {
  formR!:FormGroup
  ngOnInit(): void {
    this.formR = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]), // Désactivé en modification
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]/)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern(/^Disponible+$/)])
    });
  
    // Récupérer l'ID depuis l'URL
   /* this.route.paramMap.subscribe(params => {
      this.residenceId = params.get('id');
  
      if (this.residenceId) {
        // Charger les détails de la résidence en mode modification
        this.reservice.getResidence(this.residenceId).subscribe(residence => {
          this.formR.patchValue(residence); // Remplit le formulaire
        });
      }
    });*/
  }
  

  constructor(private reservice:ResidenceService,
    //private route: ActivatedRoute,
    private router: Router
  ){}

  residenceId: string | null = null

  addResidence(){  
    this.reservice.addResidence(this.formR.value).subscribe(() => {
      console.log('added');
      this.router.navigate(['/residence']);
    });

  }

  addOrUpdateResidence() {
    if (this.formR.invalid) {
      alert('Le formulaire contient des erreurs.');
      return;
    }
  
    let residenceData = this.formR.getRawValue(); // Récupérer toutes les valeurs du formulaire
  
    if (this.residenceId) {
      // Mode modification
      residenceData.id = this.residenceId; // S'assurer que l'ID est bien inclus dans l'objet
      this.reservice.updateResidence(residenceData).subscribe(() => {
        //alert('Résidence mise à jour avec succès !');
        this.router.navigate(['/residence']); // Redirection après mise à jour
      });
    } else {
      // Mode ajout
      this.reservice.addResidence(residenceData).subscribe(() => {
        //alert('Résidence ajoutée avec succès !');
        this.formR.reset();
      });
    }
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
