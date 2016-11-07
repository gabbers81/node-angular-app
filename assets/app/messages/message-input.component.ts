import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormControl } from '@angular/forms'

import { MessageService } from './message.service'
import { Message } from './message.model'

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private _messageService: MessageService) { }

    ngOnInit() {
        this._messageService.messageEdited.subscribe(
            (message: Message) => this.message = message
        );
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    onSubmit(form: NgForm) {
         console.log(this.message);
        if (this.message) {
            //Editing
            this.message.content == form.value.content;
            this._messageService.updateMessage(this.message)
                .subscribe(res => {
                console.log(this.message);
                console.log(res)
            });
            this.message = null;
        } else {
            //Creating
            const message = new Message(form.value.content, 'Gus')
            this._messageService.addMessage(message)
                .subscribe(
                data => console.log(data),
                err => console.log(err)
                );
        }

        form.resetForm();
    }
}