import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Residence } from 'src/core/models/residence'

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  urlResidence = "http://localhost:3000/residence"

  constructor(private http:HttpClient) { }

  getnumberinlist(list:any,creteria:any,value:any){
    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
    return n
  }

  getallResidence():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.urlResidence)
  }

  addResidence(res:Residence):Observable<Residence>{
    return this.http.post<Residence>(this.urlResidence, res)
  }

  updateResidence(res:Residence,id:number):Observable<Residence>{
    return this.http.put<Residence>(this.urlResidence + '/' + res.id , res)
  }

  getResidence(id:any):Observable<Residence>{
    return this.http.get<Residence>(this.urlResidence + '/' + id)
  }

  deleteResidence(id:any):Observable<Residence>{
    return this.http.delete<Residence>(this.urlResidence + '/' + id)
  }
}
