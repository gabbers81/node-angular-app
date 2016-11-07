import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core'
import 'rxjs/Rx';
import { Observable } from 'rxjs'

import { Message } from './message.model';

@Injectable()
export class MessageService {

    private messages: Message[] = [];
    private url = 'http://localhost:3000/message/';

    constructor(private _http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);

        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this._http.get(this.url)
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages){
                    transformedMessages.push(new Message(message.content, 'Dummy', message.id, null))
                }
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
                 
                 
    }

    deleteMessage(message) {
        this.messages.splice(this.messages.indexOf(message), 1)
    }


}
