import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

import { SessionConfig } from '../../../../core/config/session.config';
import { EnterpriseService } from '../../../../core/services/enterprise.service';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { CheckboxComponent } from '../../../../shared/components/ui/checkbox/checkbox.component';
import { InputComponent } from '../../../../shared/components/ui/input/input.component';
import { InputData } from '../../../../shared/types/input';
import { AuthWrapperComponent } from '../../components/auth-wrapper/auth-wrapper.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        AuthWrapperComponent,
        ButtonComponent,
        InputComponent,
        CheckboxComponent,

        ReactiveFormsModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    readonly inputsData: InputData[] = [
        {
            id: 'document',
            label: 'Tipo de documento',
            placeholder: 'Ingresa tu documento de identidad',
            errorText: 'El documento no es valido',
            type: 'text',
        },
        {
            id: 'password',
            label: 'Contraseña',
            placeholder: 'Ingresa tu contraseña',
            errorText: 'La contraseña es incorrecta',
            type: 'password',
        },
    ];

    loginForm!: FormGroup;

    constructor(
        private readonly _enterpriseService: EnterpriseService,
        private readonly _formBuilder: FormBuilder,
    ) {
        this.loginForm = this._formBuilder.group({
            document: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    ngOnInit(): void {
        this._enterpriseService
            .getEnterpriseName()
            .subscribe(
                (enterpriseName) => (SessionConfig.enterprise = enterpriseName),
            );
    }

    handleSubmit(): void {
        if (this.loginForm.valid) {
            console.log(this.loginForm.value);

            return;
        }

        console.log('errors!');
    }
}
