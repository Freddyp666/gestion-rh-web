export const empleadosRoutes = [

    {
        path: '',
        loadComponent: () => import('./lista-empleados/lista-empleados').then(m => m.ListaEmpleados)
    }

]