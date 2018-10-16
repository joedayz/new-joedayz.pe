import {Component, OnInit} from '@angular/core';
import {Foto} from "./dto/foto.model";
import {InicioService} from "./service/inicio.service";

@Component({
  selector: 'home',
  templateUrl: 'inicio.component.html'
})

export class InicioComponent implements OnInit {



  fotos : Foto[] = [];

  constructor( private inicioService: InicioService) {  //Inyeccion de dependencias
  }

  ngOnInit() {

      this.inicioService.consultarFotosInicio().subscribe(

        (data: Foto[]) => {

            this.fotos = data;
        },
        error => {
          console.log(error);

        }

      )};
}
