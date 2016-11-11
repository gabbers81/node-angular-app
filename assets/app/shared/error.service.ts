import { Error } from './error.model';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
    errorOcurred = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOcurred.emit(errorData);
    }


    constructor() { }
}