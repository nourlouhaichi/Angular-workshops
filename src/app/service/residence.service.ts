import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor() { }

  getnumberinlist(list:any,creteria:any,value:any){
    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
    return n
  }
}
