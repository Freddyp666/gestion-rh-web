import { Routes } from '@angular/router';

export const routes: Routes = [
    {

        path: 'empleados',
        loadChildren: () => import('./features/empleados/empleados.routes').then(m => m.empleadosRoutes)
        
    },
    {
        path: '',
        redirectTo: 'empleados',
        pathMatch: 'full'
    }

];
