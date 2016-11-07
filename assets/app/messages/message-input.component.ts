import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormControl } from '@angular/forms'

import { MessageService } from './message.service'
import { Message } from './message.model'

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent implements OnInit {

    constructor(private _messageService: MessageService) { }

    ngOnInit() { }

    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, 'Gus')
        this._messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                err => console.log(err)
            );

        form.resetForm();
    }
}