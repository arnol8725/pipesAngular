import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre :string ="Arnol";
  nombre2 :string ="arnol perAlta perez";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number =0.234;
  salario =1234.5;

  heroe = {
    nombre : "Logan",
    clave : "Wolverine",
    edad : 500,
    direccion :{
        calle :"Primavera",
        casa: "19"
    }

  }


  valoresDePromesa = new Promise ((resolve,reject)=>{
      setTimeout(()=>resolve('Llego la data!'),3500);
  })

  fecha = new Date();

  activar :boolean = true;
  public nombre3:string ="";

  cambio(cam:string){
    console.log(cam);
    this.nombre3= cam;

  }
}
