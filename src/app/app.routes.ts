import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)

   },

   
    /*{

        path: 'empleados',
        loadChildren: () => import('./features/empleados/empleados.routes').then(m => m.empleadosRoutes)
        
    },
    {
        path: '',
        redirectTo: 'empleados',
        pathMatch: 'full'
    }*/
{
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
}
];
