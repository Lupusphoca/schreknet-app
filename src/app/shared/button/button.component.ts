import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type: string = 'button'; //Type of button -> Dynamically change by : [attr.type]
  @Input() cssClass: string = 'button'; //To pass a custom css class -> Dynamically change by : [attr.class] or [ngClass]
  @Input() disabled: boolean = false; //To disable if needed the button;

  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event) {
    if(!this.disabled) {
      this.buttonClick.emit(event);
    }
  }
}
