import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputData } from '../../../types/input';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
})
export class InputComponent {
    @Input() inputData!: InputData;
    @Input() fullWidth: boolean = false;
    @Input() formGroup!: FormGroup;
    @Input() isError: boolean = false;
}
