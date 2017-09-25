import { Component, OnInit } from '@angular/core';
import {palabrasExcluidas }from '../../datos/datosDefine';
import * as qunit from 'qunitjs';
import * as jquery from 'jquery';

declare var jquery:any;
declare var qunit:any;

@Component({
  selector: 'app-procesamiento',
  templateUrl: './procesamiento.component.html',
  styleUrls: ['./procesamiento.component.css']
  
})
export class ProcesamientoComponent implements OnInit {
abecedario=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
palabrasExcluidas : any[]=palabrasExcluidas;
palabrasAProcesar :string[]=[];
palabrasProcesadas:string[]=[];


  constructor() { }

  ngOnInit() {
  }
procesamiento(respuesta:string){
          let respuest:string[] =this.dividirRespuesta(respuesta.toLowerCase());
          console.log(respuest);
          this.excluirPalabras(respuest);
          console.log(this.palabrasProcesadas);
}


dividirRespuesta(respuesta:string):string[]{
          
        return this.palabrasAProcesar=respuesta.split(" ");
}


excluirPalabras(palabrasAProcesar:string[]){
         let esDistinta:boolean;
         let contador =0;
                    for ( let i=0;i<palabrasAProcesar.length;i++){
                                      
                      let letra = palabrasAProcesar[i].charAt(0); console.log("LETRA ----------->" +letra)
                                     // comprueba si es una palabra excluida
                  let palabra =   palabrasAProcesar[i];            
                                                for(let m=0;m<this.palabrasExcluidas.length;m++){
                                                
                                                 if(letra === this.palabrasExcluidas[m].id){
                                                
                                      
                                       
                                   palabra = this.esPalabraDistinta(palabra, this.palabrasExcluidas[m].palabrasEx);
                                
                                   if(palabra!=undefined) this.palabrasProcesadas.push(palabra);
                                                    }
                                                  
                                                }
                                                
                                               
                                                letra="";
                                              }
                                            
                              

                                     }
                                      deepEquals(x:String, y:String) {
                                      if (x ===y) {
                                        return true; // if both x and y are null or undefined and exactly the same
                                      } else if (!(x instanceof Object) || !(y instanceof Object)) {
                                        return false; // if they are not strictly equal, they both need to be Objects
                                      } else if (x.constructor !== y.constructor) {
                                        // they must have the exact same prototype chain, the closest we can do is
                                        // test their constructor.
                                        return false;
                                      } else {
                                        for (const p in x) {
                                          if (!x.hasOwnProperty(p)) {
                                            continue; // other properties were tested using x.constructor === y.constructor
                                          }
                                          if (!y.hasOwnProperty(p)) {
                                            return false; // allows to compare x[ p ] and y[ p ] when set to undefined
                                          }
                                          if (x[p] === y[p]) {
                                            continue; // if they have the same strict value or identity then they are equal
                                          }
                                          if (typeof (x[p]) !== 'object') {
                                            return false; // Numbers, Strings, Functions, Booleans must be strictly equal
                                          }
                                          if (!this.deepEquals(x[p], y[p])) {
                                            return false;
                                          }
                                        }
                                        for (const p in y) {
                                          if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
                                            return false;
                                          }
                                        }
                                        return true;
                                      }
                                    }               
                                     esPalabraDistinta(palabra:string, arr: string[]){
                                      let iguales :boolean;
                                      let p;
                                        for (let i =0;i<arr.length;i++){

                                   
                                          for (let  x =0;x<palabra.length;x++){
                                            console.log("palabara " +palabra)
                                            console.log("palabraArray :::::" +arr[i])
                                            if(palabra.charAt(x) == arr[i].charAt(x)){
                                              p=undefined;
                                            }else{
                                              p=palabra;
                                            }
                                          }
                                     
                                                                    

                                                // iguales =this.deepEquals(new String(palabra),new String(arr[i]));
                                                  
                                                  //  if(iguales){
                                                    
                                                    //}else{
                                                      //p = palabra;
                                                    //}


                                                 
                                      
                                        return p;
                      
                                                        
                                 }                                          


                              
                                }
                              }          


