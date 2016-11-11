import { ErrorService } from './error.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: 'error.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height:100vh;
        }
    
    `]
})
export class ErrorComponent implements OnInit, OnDestroy {

error: Error;
display = 'none';

    constructor(private _errorService: ErrorService) { }

    ngOnInit() { 
        this._errorService.errorOcurred
            .subscribe(error => {
                this.error = error,
                this.display = 'block'
            });
    }

    onErrorHandled() {
        this.display= 'none';
    }

    ngOnDestroy() {
        this._errorService.errorOcurred.unsubscribe();
    }

}