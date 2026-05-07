import { Component, signal } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [ RouterOutlet],
  templateUrl: './auth.component.html',
  styles: [`
      .background {
        position: fixed;
        inset: 0;
        background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover;
        filter: brightness(0.7);
        z-index: -1;
      }
      `]
  })
export class AuthComponent {

}
