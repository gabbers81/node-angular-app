import { LogOutComponent } from './logout.component';
import { SingUpComponent } from './signup.component';
import { SingInComponent } from './signin.component';
import { Routes } from '@angular/router';


export const AUTH_ROUTES: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SingUpComponent },
    { path: 'signin', component: SingInComponent },
    { path: 'logout', component: LogOutComponent },
];

