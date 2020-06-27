import { Component, OnInit } from '@angular/core';

import {AllPokemonsService} from 'src/app/services/all-pokemons.service'
import { IAll } from 'src/app/interfaces/all.interface';
import { Plist } from 'src/app/models/allPokemons.model';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss']
})
  
export class AllPokemonsComponent implements OnInit {
  Arraya:Array<any> =[]
  Allpp:Array<any> =[]
  AllNewp:Array<any> =[]
  name:string
  url:string 
  id:number
   i:number

  hideme:boolean = true
  hide:boolean = true
  try:boolean   
  water:boolean = false
// 
 
fiftyOne:number = 10
oneHundredOne:number  = 60
oneHundredTwentyFive:number = 110

count: number = 0;
s:number = 20
  p:Array<any> 
  Clicked:Array<any> =[]
// 
// All Types
Types:Array<any> =[]

  constructor(private allPokemonsService:AllPokemonsService , private http: HttpClient) { }

  ngOnInit(): void {
    this.getP()
     this.getT()
    // this.createPList()
  }
  private getP() {
    // this.allPokemonsService.getAllPokemons
    this.allPokemonsService.getAllPokemons().subscribe(
      data =>{
       
       this.Arraya = data['results'];
       
        console.log('this.Arraya' , this.Arraya)
        // data['results'].forEach(element => {
        //   this.http.get<Array<IAll>>(element.url )
        // })


        this.Arraya.forEach(element =>{
          console.log(element.url)
           this.http.get<Array<IAll>>(element.url).subscribe(
              data =>{ 
                this.Allpp.push(data)
               console.log(data)
               console.log('this all' ,this.Allpp[0])
               
              })


      }, error => {console.log('Oops' , error)}
    )



     
    })
     
  }
 private getT(){
  this.allPokemonsService.getAllTypes().subscribe(
   data =>{
     console.log(data['results'])
    this.Types = data['results'];
   }

  )
 }
 private getCustomT(i:number){
  this.allPokemonsService.getCustomTypes(i).subscribe(
     
    data =>{
      console.log(data['pokemon']) 
      this.Arraya = data['pokemon'];
      
       console.log('this.Arraya' , this.Arraya)
       // data['results'].forEach(element => {
       //   this.http.get<Array<IAll>>(element.url )
       // })

       this.Allpp = []
       this.Arraya.forEach(element =>{
         console.log(element.pokemon.url)
          this.http.get<Array<IAll>>(element.pokemon.url).subscribe(
             data =>{ 
               this.Allpp.push(data)
              console.log(data)
              console.log('this all' ,this.Allpp)
              
             })


     }, error => {console.log('Oops' , error)}
   )



    
   })
 }
 
 

  // public createPList():void{
  //   const newP:IAll = new Plist(this.id, this.name , this.url);
  //   if(this.Arraya.length > 0){
  //     newP.id = this.Arraya.slice(-1)[0].url.slice(34, -1);
  //     newP.name = this.Arraya.slice(-1)[0].name
  //     newP.url = this.Arraya.slice(-1)[0].url
  //     console.log('what' , newP)
  //   }
  // }
  onClickMe(Allpp , i){
    this.Clicked.pop()
    this.Clicked.push(this.Allpp[i])
    console.log(this.Allpp[i])
    console.log(this.Clicked)
  }
  loadPokemons(){
    this.fiftyOne  += 9
    this.oneHundredOne  += 9
    this.oneHundredTwentyFive += 9
  }
showinfo(){
  this.hideme = true
}
hideinfo(){
  this.hideme = !this.hideme
}

  chooseType(event : any, i: number){
    this.count++
    console.log('', event)
    console.log('1', event)
    console.log('1', event.srcElement.value)
    this.i = ++event.srcElement.value
    console.log(this.i)
  //  event.srcElement.className += event.srcElement.value
  //  <HTMLElement>document.querySelector(".check") 
  
         
    // if(document.querySelectorAll('.chosen').checked == false){
    //   console.log('none')
    // }
    // if(event.srcElement.checked == false){
    //   console.log('none chosen ')
    // }
    // if(event.srcElement.checked) {
    //   console.log(event.srcElement.value)
    // }
    // this.hide = false
//     console.log(event.srcElement.className)
//     if( document.getElementById('checker').className != event.srcElement.className){
//  document.getElementById('checker').hidden = true
//  document.getElementById('checker').style.border = 'none'
//     }
//  this.Allpp.forEach(element => {
//   // element.filter(t => t.type.types[0].name == event.srcElement.className)
 
//  for(let i:number = 0 ; this.Allpp.length > i ; i++){
//     console.log('check 1' , this.Allpp[i].types[0].type.name)
//     console.log('check 2' , event.srcElement.className) 

//     // event.srcElement.checked
//    if(this.Allpp[i].types[0].type.name == event.srcElement.className  ){
//     // || this.Allpp[i].types[1].name == event.srcElement.className)
//   //  console.log(event.srcElement.className)
//    this.AllNewp.push(this.Allpp[i])
//    } }})
 
//  console.log('here they are' , this.AllNewp)
//  this.Allpp = this.AllNewp
//   }
 
if(this.count % 2 != 0) {
// this.Allpp.forEach(element => { 
//  if(element.types[0].type.name == event.srcElement.value){
//   this.AllNewp.push(element)
//  }
//  console.log('here' , event.srcElement.value)
// })
// console.log('here they are' , this.AllNewp)
// this.Allpp = this.AllNewp
this.getCustomT(this.i)
}
 
if(this.count % 2 == 0) {
  let x = document.getElementsByClassName("check");
  let n: number;
  for (n = 0; n < x.length; n++) {
      (<HTMLElement>x[n]).setAttribute("checked", "true");
      // (<HTMLElement>x[i]).checked = "checked";
      (< HTMLInputElement > x[n]).checked = false;
  }
  this.Allpp = []
  this.getP()
}
 
  }



 
}