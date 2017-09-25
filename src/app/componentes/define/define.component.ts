import { Component, OnInit, ViewChild } from "@angular/core";
import {datosDefine} from '../../datos/datosDefine';
import { ProcesamientoComponent } from '../procesamiento/procesamiento.component';
import { TiempoComponent } from "./tiempo/tiempo.component";


@Component({
  selector: 'app-define',
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.css'],
  providers:[ProcesamientoComponent,TiempoComponent]
})
export class DefineComponent implements OnInit {
define : string="DEFINE : ";
fin:string ="..."
haLlegadoAlFin:boolean=false;
caja :any ;
datos : any[]=datosDefine;
idDatoActual:number;
palabraActual:string;
valor:any="";
caracteres : number;
datosYaMostrados :any[]=[];
tuDefinicion:string="";
auxTuDefinicion:string;
miDefinicion:any[];
botonHabilitado:boolean=false;
definido:boolean;
ucanttouchthis:boolean=false;
nuevoTiempo:boolean;

tiemp:number;
esTiempoEmpezado:boolean;
ocultarTiempo:boolean;

@ViewChild(TiempoComponent)
public tiempo:TiempoComponent;



  constructor(public procesamiento:ProcesamientoComponent) {
     this.definido = false;
   
    //document.getElementById("caja").appendChild(contenedor);
    this.palabraAleatoria(this.datos,this.datosYaMostrados)
   
   }

  ngOnInit() {
   
     
   
  }

   haEmpezadoTiempo(){
      this.esTiempoEmpezado=true;
      this.ocultarTiempo =true;
      
   }

empezarDeNuevo(){
  this.datosYaMostrados=[];
  this.palabraAleatoria(this.datos,this.datosYaMostrados);
  this.esTiempoEmpezado=false;
  this.definido=false;
  this.ocultarTiempo=false;
  this.haLlegadoAlFin=false;

}


   palabraAleatoria(arr:any[],mostrados:any[]){
    if(mostrados.length == arr.length-1){
     // this.writing(this.fin)   
     console.log("MOSTRADOS"+mostrados.length)
     this.haLlegadoAlFin=true;
    }
 
                let repetido:boolean=true;
                console.log("MOSTRADOS DESDE FUERA"+mostrados.length)
                    while(repetido && mostrados.length<arr.length){
                      let num=Math.round(Math.random()*arr.length);
                      if(num == arr.length) num=num-1

                         repetido = this.palabraRepetida(num,mostrados);
                      
                         if(!repetido ){
                          
                              mostrados.push(num);
                              this.writing(arr[num].palabra.toUpperCase());
                             this.idDatoActual=num;
                             this.palabraActual=arr[num].palabra.toUpperCase();

                                this.caracteres= this.contarCaracteres(this.datos,num);
                                repetido =false;      
                                this.tiemp=Math.ceil(this.caracteres/3);           this.nuevoTiempo=true;
                                
                    }   
                  
         }  
        this.ucanttouchthis=false;
     
   }
 palabraRepetida(num:number,arr:any[]) :boolean{
   let repetido :boolean = false;
 
   for (let i =0;i<arr.length;i++){
    
     if(num === arr[i]) repetido = true;
   }
   return repetido;
 }

// escribir a máquina la palabra a definir
   writing = str =>{
   
    this.caja =document.getElementById("caja");
       let arrFromStr = str.split('');
       let i =0;
       let  printStr = setInterval(function(){
             
             this.caja.value+=arrFromStr[i]
       i++;
       if (i ===arrFromStr.length ){
           clearInterval(printStr)
          
       }
   },100);
   };

  habilitarBoton( modo:boolean){
    if(modo){
       if(this.tuDefinicion)
      this.botonHabilitado=true;
    }else{
      this.botonHabilitado=false;
    }
  }

  definirPalabraSiguiente(){
    this.definido=false;
    this.ocultarTiempo=false;
    this.esTiempoEmpezado=false;
    
    this.palabraAleatoria(this.datos,this.datosYaMostrados)
  }


   procesarRespuesta(valor){
       this.playMusic();
        this.definido = true;
               // RECUPERAR RESPUESTA DEL USUARIO
               this.tuDefinicion=valor;
               this.auxTuDefinicion=this.tuDefinicion;
               this.tuDefinicion="";
              this.miDefinicion=datosDefine[this.idDatoActual].definicion;


          // por esto busca otra palabra al click en DEFINE QUITAR 
    
    //this.procesamiento.procesamiento(valor);
  }
   //contar los caracteres de una definicion  de la palabra actual mostrada del array de datos
   contarCaracteres(array:any[],posicion:number):number{
         let num:number =0;
    
          for (let j =0;j<array[posicion].definicion.length;j++){
                    num +=array[posicion].definicion[j].length;
          }
          console.log(num)
         return num;
   }
   playMusic(){
    var music = new Audio('../../assets/audio/canttouchthis.mp3');
    music.play();
    }
}
