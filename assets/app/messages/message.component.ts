import { MessageService } from './message.service';
import { Component, OnInit, Input } from '@angular/core';

import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
   `]
})

export class MessageComponent implements OnInit {

    @Input() message: Message;

    constructor(private _messageService: MessageService) { }

    ngOnInit() {

    }

    onEdit() {
        this._messageService.editMessage(this.message);
    }

    onDelete() {
        this._messageService.deleteMessage(this.message);
    }

}