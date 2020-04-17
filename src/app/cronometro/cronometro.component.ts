import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  todayDate : Date = new Date();

  horas:any='00';
  minutos:any='00';
  segundos:any='00';
  milisegundos:any='00';

  horas2:any='00';
  minutos2:any='00';
  segundos2:any='00';
  milisegundos2:any='00';

  @Input() entrada;
  @Output() salida = new EventEmitter();
  cronometro:any='';
  cronometro2:any='';
  datos=[];
  estado=false;
  MarcarReiniciar='Reiniciar';
  IniciarDetener='Iniciar';
  constructor() { }

  ngOnInit(): void {

  }
  IniciarPausar(){
    if(this.estado==true){
      this.estado=false;
      this.parar();
      this.MarcarReiniciar='Reiniciar';
      this.IniciarDetener='Iniciar';
    }
    else{
      this.estado=true;
      this.iniciar();
      this.MarcarReiniciar='Marcar';      
      this.IniciarDetener='Detener';
    }
  }
  iniciar(){

    if (this.datos.length>0) {
    }
    else
    {
      this.segundos = this.entrada;
    }
        
    this.cronometro= setInterval(()=>{
      this.milisegundos++;      
      if (this.milisegundos==100) {
        this.milisegundos=0; 
        this.segundos++;        
        /* */
        if (this.segundos % 10 == 0) {
          this.salida.emit(this.segundos);
        }
        if (this.segundos==60) {
          this.segundos=0;
          this.minutos++;
          if (this.minutos==60) {
            this.minutos=0;
            this.horas++;
            if (this.horas==24) {
              this.horas=0;
            }
            if (this.horas<=9) {
              this.horas='0'+this.horas;
            }
          }
          if (this.minutos<=9) {
            this.minutos='0'+this.minutos;          
          }
        }
        if (this.segundos<=9) {
          this.segundos='0'+this.segundos;
        }  
        }
        if (this.milisegundos<=9) {
          this.milisegundos='0'+this.milisegundos;
        }
    },10);

    if (this.datos.length>0) {
    }
    else
    {
      this.segundos2 = this.entrada;
    }
        
    this.cronometro2= setInterval(()=>{
      this.milisegundos2++;      
      if (this.milisegundos2==100) {
        this.milisegundos2=0; 
        this.segundos2++;        
        
        if (this.segundos2==60) {
          this.segundos2=0;
          this.minutos2++;
          if (this.minutos2==60) {
            this.minutos2=0;
            this.horas2++;
            if (this.horas2==24) {
              this.horas2=0;
            }
            if (this.horas2<=9) {
              this.horas2='0'+this.horas2;
            }
          }
          if (this.minutos2<=9) {
            this.minutos2='0'+this.minutos2;          
          }
        }
        if (this.segundos2<=9) {
          this.segundos2='0'+this.segundos2;
        }  
        }
        if (this.milisegundos2<=9) {
          this.milisegundos2='0'+this.milisegundos2;
        }
    },10);
  }
  
  parar(){ 
    clearInterval(this.cronometro2);
    clearInterval(this.cronometro);
    this.datos.unshift({
      index:this.datos.length+1,
      cronometro:this.horas2+':'+this.minutos2+':'+this.segundos2+':'+this.milisegundos2,
      fecha:this.todayDate,
    });
    this.horas2='00';
    this.minutos2='00';
    this.segundos2='00';
    this.milisegundos2='00';
    
  }
  marcar(){
    
    if(this.MarcarReiniciar=='Marcar'){
      this.datos.unshift({
        index:this.datos.length+1,
        cronometro:this.horas2+':'+this.minutos2+':'+this.segundos2+':'+this.milisegundos2,
        fecha:this.todayDate,
      });
      this.horas2='00';
      this.minutos2='00';
      this.segundos2='00';
      this.milisegundos2='00';
    }
    else{
      clearInterval(this.cronometro);
      this.horas='00';
      this.minutos='00';
      this.segundos='00';
      this.milisegundos='00';
      this.datos=[];
      
    }
    
  }

}
