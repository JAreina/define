import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.css']
})
export class CuentaAtrasComponent implements OnInit {

  

  ngOnInit() {
  }
  horas:any="00";
  minutos: any="00";
  segundos: any="00";
  inicioSegundos:any;
  milisegundos:any="00";
  isPaused: boolean;
  buttonLabel: string;
  control:any;
tiempoTerminado:boolean;
  constructor() {
   // this.empezar();
  }
 



  empezar(){
    this.tiempoTerminado=false;
    this.horas="00";
    this.minutos="00";
    this.segundos="00";
    this.milisegundos="00";
    this.resetTimer();
    this.control=  setInterval(() => this.tick(), 10);
    this.togglePause();
  }


  resetTimer(): void {
    this.isPaused = true;
    this.horas=0;
    this.minutos = 0;
    this.segundos = this.inicioSegundos;
    this.milisegundos=99;
    this.buttonLabel = 'Botón hijo cuenta atrás';
  }
 
  private tick(): void {
    if (!this.isPaused) {
      if (--this.milisegundos < 0) {
         this.milisegundos = 99 }
      
      if (this.milisegundos ==0) {
        this.segundos--;
        if (this.minutos< 0) {
          this.resetTimer();
        }
        if(this.segundos ==0){
          clearInterval(this.control);
          this.tiempoTerminado=true;
          this.milisegundos="00";
          
        }
      }
    }
  }
 
  togglePause(): void {
    this.isPaused = !this.isPaused;
    
  }
}
