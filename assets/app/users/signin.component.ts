import { Routes, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: "./signin.component.html"   
})
export class SingInComponent implements OnInit {
    
    myForm: FormGroup;

    constructor(private _userService: UserService, private router: Router) { }

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);

        this._userService.singin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                err => console.log(err)
                );
            
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                    Validators.required
                ]),
            password: new FormControl(null, Validators.required)
        });
     }

}