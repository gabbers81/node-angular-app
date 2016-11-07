import { Component, OnInit } from '@angular/core'

import { Message } from './message.model'
import { MessageService } from './message.service'

@Component({
    selector: 'app-message-list',
    template: `
    <div class="container">
        <app-message-input></app-message-input>
        <hr>
        <app-message
            [message]="message"
            *ngFor="let message of messages">
        </app-message>
    </div>
    `,
    styleUrls: [``],
})


export class MessageListComponent implements OnInit {

    messages: Message[] = [];

    constructor(private _messageService: MessageService) { }

    ngOnInit() {
       this._messageService.getMessages()
            .subscribe(
                res => this.messages = res,
                err => console.log(err)
                );
    }

}