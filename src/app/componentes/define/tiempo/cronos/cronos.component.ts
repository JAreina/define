import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronos',
  templateUrl: './cronos.component.html',
  styleUrls: ['./cronos.component.css']
})
export class CronosComponent implements OnInit {
  horasCRONO:any="00";
  minutosCRONO:any="00";
  segundosCRONO:any="00";
  centesimasCRONO:any="00";
  control:any;
  activado:boolean;
   limiteCRONO:any;
   botonCRONO:string="botón hijo cronómetro"
  ngOnInit() {
  }
 


constructor(){
  
  
  // this.empezarCRONO(); 
}

empezarCRONO()
{
  this.centesimasCRONO = "00";
  this.segundosCRONO = "00";
  this.minutosCRONO = "00";
  this.horasCRONO = "00";
  this.control =setInterval(() =>  this.inicio(),10);
}
inicio () {

if(!this.activado){



          if (this.centesimasCRONO < 99) {
                   this.centesimasCRONO++;
if (this.centesimasCRONO < 10) { this.centesimasCRONO = "0"+this.centesimasCRONO }
    this.centesimasCRONO = this.centesimasCRONO;
}
if (this.centesimasCRONO == 99) {
this.centesimasCRONO = "00";
}
if (this.centesimasCRONO == 0) {
this.segundosCRONO++;
if (this.segundosCRONO < 10) { this.segundosCRONO = "0"+this.segundosCRONO }
      this.segundosCRONO =this.segundosCRONO;
}
if (this.segundosCRONO == 59) {
this.segundosCRONO = "00";
}
if ( (this.centesimasCRONO == 0)&&(this.segundosCRONO == 0) ) {
this.minutosCRONO++;
if (this.minutosCRONO < 10) { this.minutosCRONO = "0"+this.minutosCRONO }
this.minutosCRONO= this.minutosCRONO;
}
if (this.minutosCRONO == 59) {
this.minutosCRONO = "00";
}
if ( (this.centesimasCRONO == 0)&&(this.segundosCRONO == 0)&&(this.minutosCRONO == 0) ) {
this.horasCRONO++;
if (this.horasCRONO < 10) { 
  this.horasCRONO = "0"+this.horasCRONO 
}
this.horasCRONO = this.horasCRONO;



}


if(this.segundosCRONO==this.limiteCRONO){
  this.pararCRONO();
}
}

}


pararCRONO () {
clearInterval(this.control);
this.activado = false;

}
reinicio () {
clearInterval(this.control);
this.centesimasCRONO = "00";
this.segundosCRONO = "00";
this.minutosCRONO = "00";
this.horasCRONO = "00";

this.activado = false;
}


}
