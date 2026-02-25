import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Empleado {

  private http=inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/empleados`;

  getEmpleados():Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  

}
