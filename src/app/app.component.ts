import { Component, model } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './auth/header/header.component';
import { MatrixComponent } from "./style/matrix/matrix.component";
import { ButtonComponent } from "./shared/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, HeaderComponent, MatrixComponent, ButtonComponent],
})
export class AppComponent {
  // outpass = model.required<boolean>();
  outpass: boolean = false;

  onClick() {
    this.outpass = !this.outpass;
    // this.outpass.set(!this.outpass)
  }
}
