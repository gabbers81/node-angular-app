import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
        <app-message-list></app-message-list>            
    `
})
export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}