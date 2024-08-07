import { Injectable } from '@angular/core';

import { InputData } from '../../../shared/types/input';

@Injectable()
export class LoginService {
    inputsData: InputData[] = [
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
}
