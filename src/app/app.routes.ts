import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Home } from './main/home/home';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
