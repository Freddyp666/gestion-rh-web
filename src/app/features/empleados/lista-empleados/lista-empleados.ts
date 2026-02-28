import { Component, inject } from '@angular/core';
import { EmpleadoService } from '../../../core/service/empleado.service';
import { Empleado } from '../../../core/models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  imports: [],
  templateUrl: './lista-empleados.html',
})
export class ListaEmpleados {
  empleados: Empleado[] = [];
  cargando: boolean = true;  // ← para mostrar loading
  error: string = '';  // ← para mostrar errores


  ngOnInit(){
    this.obtenerEmpleados();
  }

  private empleadoService = inject(EmpleadoService);

  private obtenerEmpleados() {
    this.cargando = true;
    this.empleadoService.getEmpleados().subscribe({
      next: (dato) => {
        this.empleados = dato;
        this.cargando = false;
      },
      error:(error)=>{
        console.error('Error al obtener empleados:', error);
        this.error = 'No se pudieron cargar los empleados. Intente nuevamente más tarde.';
        this.cargando = false;
      }
    });
  }
}
