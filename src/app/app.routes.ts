import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Home } from './main/home/home';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'json-counter',
        loadChildren: () => import('../app/main/features/json-counter/json-counter-module').then(m => m.JsonCounterModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
