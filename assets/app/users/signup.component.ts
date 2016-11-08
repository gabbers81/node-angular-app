import { User } from './user.model';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: "./signup.component.html"
})
export class SingUpComponent implements OnInit {
    myForm: FormGroup;

    constructor(private _userService: UserService) { }

    onSubmit() {
        console.log(this.myForm);
        const user = new User(
            this.myForm.value.password,
            this.myForm.value.email,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        )
        console.log(user);
        this._userService.singup(user)
            .subscribe(
            data => console.log(data),
            err => console.log(err)
            );
            this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}