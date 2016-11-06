import { LogOutComponent } from './users/logout.component';
import { SingUpComponent } from './users/signup.component';
import { SingInComponent } from './users/signin.component';
import { AuthComponent } from './users/user-authentication.component';
import { NavBarComponent } from './shared/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component"
import { MessageListComponent } from './messages/message-list.component'
import { MessageInputComponent} from './messages/message-input.component'
import { MessagesComponent } from './messages/messages.component';
import { routing } from './app.routing'

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        NavBarComponent,
        AuthComponent,
        SingInComponent,
        SingUpComponent,
        LogOutComponent

    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}