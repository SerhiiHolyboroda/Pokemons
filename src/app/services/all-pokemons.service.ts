import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAll } from '../interfaces/all.interface';

@Injectable({
  providedIn: 'root'
})
export class AllPokemonsService {

  constructor(private http: HttpClient) {  }
public n:number = 151
 
  public getAllPokemons():Observable<Array<IAll>>  {
   return  this.http.get<Array<IAll>>(`https://pokeapi.co/api/v2/pokemon?limit=${this.n}`) 
   
//     this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.n}`).subscribe(json => console.log('hehe' , json.results.forEach(element => {
//     console.log(element)
//     this.results = element
//     // this.htmlToAdd +=  `<div class="something" > ${ element.url}  </div>  `
//     console.log('elem.id' , element.id)
//     // this.element1 = element
//     console.log('this.url' , element.url)
//     // this.input =  element.url;
//     // this. input = this.input.slice(34, -1);
//     // this.input.substring(this.input.length() - 4);
// // console.log(this.input);
    
// // index = str; 

//     })))
//   return   this.element.url
//   }
  } 
  getAllTypes():Observable<Array<any>>{
    return  this.http.get<Array<IAll>>(`https://pokeapi.co/api/v2/type/?limit=999`)
  }
  getCustomTypes(i:number):Observable<Array<any>>{
     
    return  this.http.get<Array<IAll>>(`https://pokeapi.co/api/v2/type/${i}`) 
     
  }
}
