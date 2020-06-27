import { IAll } from 'src/app/interfaces/all.interface';

export class Plist implements IAll{
    constructor(
        
        public id:number,
        public name:string,
        public url: string,

    ){}

    // get ID(){
    //     return  this.url.slice(34, -1);
    // }
    // set ID(url){
    //     this.id = url.slice(34, -1);
    // }
}