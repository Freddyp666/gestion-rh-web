import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  imports: [],
  templateUrl: './lista-empleados.html'
})
export class ListaEmpleados { 

  empleados = [
    { nombre: "Juan", apellido: "Pérez", email: "juan.perez@empresa.com" },
    { nombre: "María", apellido: "Gómez", email: "maria.gomez@empresa.com" },
    { nombre: "Carlos", apellido: "Rodríguez", email: "carlos.rodriguez@empresa.com" }
  ]



}
