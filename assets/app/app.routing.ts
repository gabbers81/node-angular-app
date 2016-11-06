import { AuthComponent } from './users/user-authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './messages/message.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './users/auth.routes'

import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'auth', component: AuthComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);