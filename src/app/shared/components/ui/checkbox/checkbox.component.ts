import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    standalone: true,
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
    @Input() label!: string;
    @Input() id!: string;
    @Input() isChecked!: boolean;
    @Output() handleCheck: EventEmitter<boolean> = new EventEmitter<boolean>();

    handleClick(): void {
        this.handleCheck.emit(!this.isChecked);
    }
}
