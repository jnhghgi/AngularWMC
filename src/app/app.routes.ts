import { Routes } from '@angular/router';
import { Example } from './example/example';
import { App } from './app';
import { Login } from './login/login';
import { Navigation } from './shell/navigation/navigation';

export const routes: Routes = [
    {path:'example', component:Example},
    {path:'login', component: Login},
    {path:'navigation', component: Navigation},
];

