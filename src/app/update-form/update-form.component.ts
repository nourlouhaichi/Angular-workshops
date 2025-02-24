import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  id!:number
  constructor(private act:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.act.snapshot.params["id"]
  }


}
