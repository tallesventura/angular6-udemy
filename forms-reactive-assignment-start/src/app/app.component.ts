import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {reject} from 'q';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    form: FormGroup;
    possibleStatus = ['Stable', 'Critical', 'Finished'];

    ngOnInit(): void {
        this.form = new FormGroup({
            'projectName': new FormControl(null, [Validators.required], this.asyncNameValidator),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'status': new FormControl('Stable')
        });
    }

    onSubmit() {
        console.log(this.form.value);
        this.form.reset();
    }

    syncNameValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return {'nameIsInvalid': true};
        }
        return null;
    }

    asyncNameValidator(control: FormControl): Promise<any> | Observable<any> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === 'Test') {
                    resolve({'nameIsInvalid': true});
                }
                resolve(null);
            }, 1500);
        });
    }

}
