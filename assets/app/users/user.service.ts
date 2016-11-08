import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs'

import { User } from './user.model';

@Injectable()
export class UserService {
    url = 'http://localhost:3000/user'
    constructor(private _http: Http) { }

    singup(user: User) {

        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'})

        return this._http.post(this.url, body, {headers: headers})
                    .map((response: Response) => response.json())
                    .catch((err: Response) => Observable.throw(err.json()))
    }
}